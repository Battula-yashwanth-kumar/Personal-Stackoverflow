build-dev:
	docker build -t react-app-dev -f Dockerfile .

build-local:
	docker build \
		-t react-app-production-local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5000/api \
		-f Dockerfile.local .

build-production:
	docker build \
		-t react-app-production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://jvhaeiuhvtrbej.xyz/api \
		-f Dockerfile.production .
