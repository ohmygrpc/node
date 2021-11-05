GOPATH:=$(shell go env GOPATH)
ORG_NAME?=ohmygrpc
SERVICE_NAME?=echo

.PHONY: init
## init: initialize the application(api)
init:
	go mod download

.PHONY: build
## build: build the application(api)
build:
	go build -o bin/${SERVICE_NAME} cmd/main.go

.PHONY: run
## run: run the application(api)
run:
	go run -v -race cmd/main.go

.PHONY: format
## format: format files
format:
	@go install golang.org/x/tools/cmd/goimports@v0.1.7
	goimports -local github.com/${ORG_NAME} -w .
	gofmt -s -w .
	go mod tidy

.PHONY: test
## test: run tests
test:
	@go install github.com/rakyll/gotest@v0.0.6
	gotest -p 1 -race -cover -v ./...

.PHONY: coverage
## coverage: run tests with coverage
coverage:
	@go install github.com/rakyll/gotest@v0.0.6
	gotest -p 1 -race -coverprofile=coverage.txt -covermode=atomic -v ./...

.PHONY: lint
## lint: check everything's okay
lint:
	go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.43.0
	golangci-lint run ./...
	go mod verify

.PHONY: generate
## generate: generate source code for mocking
generate:
	@go get golang.org/x/tools/cmd/stringer
	@go get github.com/golang/mock/gomock
	@go install github.com/golang/mock/mockgen
	go generate ./...

.PHONY: help
## help: prints this help message
help:
	@echo "Usage: \n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':'
