class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        const placeholderRegex = /{{\s*([^}\s]+)\s*}}/g;

        const filledTemplate = this.template.replace(placeholderRegex, (match, property) => {
            return dictionary.hasOwnProperty(property) ? dictionary[property] : '';
        });

        return filledTemplate;
    }
}

const template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
const dateTemplate = new TemplateProcessor(template);
const dictionary = { month: 'July', day: '1', year: '2016' };
const filledTemplate = dateTemplate.fillIn(dictionary);
const outputContainer = document.getElementById('output-container');
outputContainer.textContent = filledTemplate;
