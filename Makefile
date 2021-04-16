.PHONY: deploy-to-k8s
## deploy-to-k8s: deploy application to kubernetes
deploy-to-k8s:
	cat k8s.yaml.tmpl | \
		docker run --rm -i \
			-e ENV \
			-e SUB_ENV_ID \
			-e IMAGE_TAG \
			hairyhenderson/gomplate:v3.6.0-slim -f - | \
		kubectl apply -f -
