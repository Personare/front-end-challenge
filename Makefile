.PHONY: all
all:
	@make install

.PHONY: install
install:
	@sudo rm -rf node_modules
	@chmod +x install.sh
	@./install.sh
