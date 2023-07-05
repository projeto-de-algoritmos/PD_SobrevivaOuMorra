install_front:
	npm install

install_back:
	npm install json-server

front:
	npm run serve

back:
	npm run backend

run:
	$(MAKE) -j 2 front back