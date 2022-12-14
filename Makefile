
all: chrome

chrome:
	@mkdir -p build && \
	zip build/wide-stackexchange.zip LICENSE manifest.json background.js \
		wide-stackexchange.css wide-stackexchange.js \
		icons/icon-disabled.png icons/icon128.png

gencss:
	@sassc -M -t compressed --sourcemap=inline wide-stackexchange.sass \
		wide-stackexchange.css
clean:
	@rm -fr build

