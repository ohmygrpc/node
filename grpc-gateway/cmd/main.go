package main

import (
	"context"
	"github.com/ohmygrpc/node/grpc-gateway/config"
	"github.com/ohmygrpc/node/grpc-gateway/server"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/sirupsen/logrus"
)

func main() {
	logrus.SetFormatter(&logrus.JSONFormatter{})

	ctx := context.Background()

	cfg := config.NewConfig(config.NewSetting())
	log := logrus.StandardLogger()

	httpServer, err := server.NewHTTPServer(ctx, cfg)
	if err != nil {
		log.Fatal(err)
	}

	go func() {
		log.WithField("port", cfg.Setting().HTTPServerPort).Info("starting echo HTTP server")
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatal(err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	defer signal.Stop(quit)

	<-quit

	log.Info("Waiting graceful shutdown")
	time.Sleep(time.Duration(cfg.Setting().GracefulShutdownTimeoutMs) * time.Millisecond)

	log.Info("Stopping golang HTTP server")
	if err := httpServer.Shutdown(ctx); err != nil {
		log.Fatal(err)
	}
	log.Info("Bye")
}
