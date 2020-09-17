import * as monaco from "monaco-editor-core";
import { languageExtensionPoint, languageID } from "./config";

const keywords = ['Server']//aggregations.concat(functions).concat(aggregationsOverTime).concat(vectorMatching).concat(offsetModifier);
const operators = ['-']

// noinspection JSUnusedGlobalSymbols
export const language = <monaco.languages.IMonarchLanguage>{
	ignoreCase: false,
	defaultToken: '',
	tokenPostfix: '.promql',

	keywords: keywords,

	operators: operators,
	//vectorMatching: vectorMatchingRegex,

	// we include these common regular expressions
	symbols: /[=><!~?:&|+\-*\/^%]+/,
	escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
	digits: /\d+(_+\d+)*/,
	octaldigits: /[0-7]+(_+[0-7]+)*/,
	binarydigits: /[0-1]+(_+[0-1]+)*/,
	hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
	integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
	floatsuffix: /[fFlL]?/,

	// The main tokenizer for our languages
	tokenizer: {
		root: [
]
    }
}

export const languageConfiguration: monaco.languages.LanguageConfiguration = {
	// the default separators except `@$`
	wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,
	// Not possible to make comments in PromQL syntax
	comments: {
		lineComment: '#',
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')'],
	],
	autoClosingPairs: [
		{open: '{', close: '}'},
		{open: '[', close: ']'},
		{open: '(', close: ')'},
		{open: '"', close: '"'},
		{open: '\'', close: '\''},
	],
	surroundingPairs: [
		{open: '{', close: '}'},
		{open: '[', close: ']'},
		{open: '(', close: ')'},
		{open: '"', close: '"'},
		{open: '\'', close: '\''},
		{open: '<', close: '>'},
	],
	folding: {}
};



export function setupLanguage() {
    monaco.languages.register(languageExtensionPoint);
    monaco.languages.onLanguage(languageID, () => {
    console.log('setup language')
        monaco.languages.setMonarchTokensProvider(languageID, language)
        monaco.languages.setLanguageConfiguration(languageID, languageConfiguration)
        monaco.languages.registerCompletionItemProvider(languageID, {
        provideCompletionItems: () => {
    console.log('createProp')
            return {suggestions:
            [{ kind: monaco.languages.CompletionItemKind.Keyword,
               label: 'Server',
               insertText: undefined as any,
               range: undefined as any},
             //{ kind: 'foo', label: 'Request' },
             //{ kind: 'bar', label: 'Response' },
             //{ kind : 'bar', label: 'Session' }
            ]} as monaco.languages.CompletionList;
        }
    });
            });

}


