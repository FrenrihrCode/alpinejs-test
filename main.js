function main() {
    return {
        isLoad: false,
        api: "https://rickandmortyapi.com/api/character",
        characters: [],
        numPages: 0,
        prev: null,
        next: null,
        fetchToAPI: function fetchToAPI(url) {
            this.isLoad = true;
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    this.characters = json.results;
                    this.numPages = json.info.pages;
                    this.next = json.info.next;
                    this.prev = json.info.prev;
                    this.isLoad = false;
                });
        },
    };
}
