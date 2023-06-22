/**
 * @typedef {Object} LogData
 * @property {String} date
 * @property {String} name
 * @property {String} author
 * @property {String} media
 * @property {String} url
 * @property {String} note
 */

export default class LogRecord {

    /**
     * @param {LogData} data 
     */
    constructor(data) {
        this._data = data;
        this.name = data.name;
        this.author = data.author;
        // this.media = data.media;
        this.url = data.url;
        this.note = data.note;
    }

    get date() {
        return new Date(this._data.date);
    }

    get media() {
        const raw = this._data.media;
        if (raw === 'novel') {
            return "Novel";
        }
        else if (raw === 'light-novel') {
            return "Light Novel";
        }
        else if (raw === 'anime') {
            return "Anime";
        }
        else if (raw === 'game') {
            return "Game";
        }
        else {
            return "???";
        }
    }

}
