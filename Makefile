build-dev:
	cd  client  &&  $(MAKE) build-dev
	cd  server  &&  $(MAKE) build-dev

run-dev:
	docker-compose  -f docker-compose-dev.yml up


### Local 

build-local:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build-dev

run-local:
	docker-compose -f docker-compose-local.yml up




#### Production

build-production:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build-dev

run-production:
	 docker-compose -f docker-compose-production.yml up

### REMOTE

SSH_STRING:=root@

ssh:
	  ssh $(SSH_STRING)


# apt install make

copy-files:
		scp -r ./* $(SSH_STRING):/root/
