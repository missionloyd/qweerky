OUTPUTS = $(sort $(wildcard outputs/*.txt))
QUESTIONS = $(patsubst outputs/%.txt,%,$(OUTPUTS))
MAKEFILE_PATH = /home/pi/dev/CSE-412/qweerky/setup-backend
ROOT = $(MAKEFILE_PATH)

all: path $(QUESTIONS)
	rm -rf tmp

%: queries/%.sql
	@echo "checking $@; correct if nothing below ----"
	@psql -A -t -d qweerky -q -f $< 1> tmp/$@.txt
	@diff outputs/$@.txt tmp/$@.txt || echo "$@ is wrong"; exit 0
	@echo ""

path:
	@mkdir -p tmp

setup_postgres:
	@echo "creating tables and adding relations"
	psql -d qweerky -q -f setup_postgres/populate_db.sql	
	@echo "importing data"
	psql -d qweerky -q -f setup_postgres/import_data.sql
	@echo "test, count the song table, the result should be 25"
	psql -d qweerky -q -c "SELECT count(*) FROM song;"

clean_postgres:
	psql -d qweerky -q -f setup_postgres/drop_tables.sql

.PHONY: setup_postgres

