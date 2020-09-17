// Generated from grammar/spaceduel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class spaceduelLexer extends Lexer {
	public static readonly SIGNED_NUMBER = 1;
	public static readonly SIGNED_INTEGER = 2;
	public static readonly NUMBER = 3;
	public static readonly INTEGER = 4;
	public static readonly SIGN = 5;
	public static readonly SHOOT = 6;
	public static readonly DROP = 7;
	public static readonly SET = 8;
	public static readonly PLOT = 9;
	public static readonly GRAB = 10;
	public static readonly ORBIT = 11;
	public static readonly MINE = 12;
	public static readonly CLOUD = 13;
	public static readonly TORPEDO = 14;
	public static readonly GUN = 15;
	public static readonly LASER = 16;
	public static readonly SHIP = 17;
	public static readonly SATELLITE = 18;
	public static readonly SHIELD = 19;
	public static readonly FUEL = 20;
	public static readonly CHARGE = 21;
	public static readonly POWER = 22;
	public static readonly EQ = 23;
	public static readonly LT = 24;
	public static readonly GT = 25;
	public static readonly LPAREN = 26;
	public static readonly RPAREN = 27;
	public static readonly AND = 28;
	public static readonly OR = 29;
	public static readonly TO = 30;
	public static readonly AT = 31;
	public static readonly T = 32;
	public static readonly R = 33;
	public static readonly A = 34;
	public static readonly E = 35;
	public static readonly FRONT = 36;
	public static readonly REAR = 37;
	public static readonly PERCENT = 38;
	public static readonly DIV = 39;
	public static readonly FULL = 40;
	public static readonly HALF = 41;
	public static readonly ZERO = 42;
	public static readonly WITH = 43;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"SIGNED_NUMBER", "SIGNED_INTEGER", "NUMBER", "INTEGER", "SIGN", "SHOOT", 
		"DROP", "SET", "PLOT", "GRAB", "ORBIT", "MINE", "CLOUD", "TORPEDO", "GUN", 
		"LASER", "SHIP", "SATELLITE", "SHIELD", "FUEL", "CHARGE", "POWER", "EQ", 
		"LT", "GT", "LPAREN", "RPAREN", "AND", "OR", "TO", "AT", "T", "R", "A", 
		"E", "FRONT", "REAR", "PERCENT", "DIV", "FULL", "HALF", "ZERO", "WITH",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'-'", "'shoot'", 
		"'drop'", "'set'", "'plot'", "'grab'", "'orbit'", "'mine'", "'cloud'", 
		"'torpedo'", "'gun'", "'laser'", "'ship'", "'satellite'", undefined, "'fuel'", 
		"'charge'", "'power'", "'='", "'<'", "'>'", "'('", "')'", "'and'", "'or'", 
		"'to'", "'at'", "'t'", "'r'", "'a'", "'e'", "'front'", "'rear'", "'%'", 
		"'/'", "'full'", "'half'", "'zero'", "'with'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SIGNED_NUMBER", "SIGNED_INTEGER", "NUMBER", "INTEGER", "SIGN", 
		"SHOOT", "DROP", "SET", "PLOT", "GRAB", "ORBIT", "MINE", "CLOUD", "TORPEDO", 
		"GUN", "LASER", "SHIP", "SATELLITE", "SHIELD", "FUEL", "CHARGE", "POWER", 
		"EQ", "LT", "GT", "LPAREN", "RPAREN", "AND", "OR", "TO", "AT", "T", "R", 
		"A", "E", "FRONT", "REAR", "PERCENT", "DIV", "FULL", "HALF", "ZERO", "WITH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(spaceduelLexer._LITERAL_NAMES, spaceduelLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return spaceduelLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(spaceduelLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "spaceduel.g4"; }

	// @Override
	public get ruleNames(): string[] { return spaceduelLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return spaceduelLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return spaceduelLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return spaceduelLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02-\u011D\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x03\x02\x05\x02[\n\x02\x03\x02\x03\x02\x03\x03\x05\x03`\n" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04g\n\x04\x03\x05\x06" +
		"\x05j\n\x05\r\x05\x0E\x05k\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xC8\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03" +
		")\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
		"+\x03,\x03,\x03,\x03,\x03,\x02\x02\x02-\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C" +
		"\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-\x03" +
		"\x02\x02\x02\u0121\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
		"\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
		"\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
		"\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03" +
		"\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
		"\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02" +
		"A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02" +
		"\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02" +
		"\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03" +
		"\x02\x02\x02\x02W\x03\x02\x02\x02\x03Z\x03\x02\x02\x02\x05_\x03\x02\x02" +
		"\x02\x07c\x03\x02\x02\x02\ti\x03\x02\x02\x02\vm\x03\x02\x02\x02\ro\x03" +
		"\x02\x02\x02\x0Fu\x03\x02\x02\x02\x11z\x03\x02\x02\x02\x13~\x03\x02\x02" +
		"\x02\x15\x83\x03\x02\x02\x02\x17\x88\x03\x02\x02\x02\x19\x8E\x03\x02\x02" +
		"\x02\x1B\x93\x03\x02\x02\x02\x1D\x99\x03\x02\x02\x02\x1F\xA1\x03\x02\x02" +
		"\x02!\xA5\x03\x02\x02\x02#\xAB\x03\x02\x02\x02%\xB0\x03\x02\x02\x02\'" +
		"\xC7\x03\x02\x02\x02)\xC9\x03\x02\x02\x02+\xCE\x03\x02\x02\x02-\xD5\x03" +
		"\x02\x02\x02/\xDB\x03\x02\x02\x021\xDD\x03\x02\x02\x023\xDF\x03\x02\x02" +
		"\x025\xE1\x03\x02\x02\x027\xE3\x03\x02\x02\x029\xE5\x03\x02\x02\x02;\xE9" +
		"\x03\x02\x02\x02=\xEC\x03\x02\x02\x02?\xEF\x03\x02\x02\x02A\xF2\x03\x02" +
		"\x02\x02C\xF4\x03\x02\x02\x02E\xF6\x03\x02\x02\x02G\xF8\x03\x02\x02\x02" +
		"I\xFA\x03\x02\x02\x02K\u0100\x03\x02\x02\x02M\u0105\x03\x02\x02\x02O\u0107" +
		"\x03\x02\x02\x02Q\u0109\x03\x02\x02\x02S\u010E\x03\x02\x02\x02U\u0113" +
		"\x03\x02\x02\x02W\u0118\x03\x02\x02\x02Y[\x05\v\x06\x02ZY\x03\x02\x02" +
		"\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\x07\x04\x02]\x04\x03" +
		"\x02\x02\x02^`\x05\v\x06\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03" +
		"\x02\x02\x02ab\x05\t\x05\x02b\x06\x03\x02\x02\x02cf\x05\t\x05\x02de\x07" +
		"0\x02\x02eg\x05\t\x05\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\b\x03\x02" +
		"\x02\x02hj\x042;\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02kl\x03\x02\x02\x02l\n\x03\x02\x02\x02mn\x07/\x02\x02n\f\x03\x02\x02" +
		"\x02op\x07u\x02\x02pq\x07j\x02\x02qr\x07q\x02\x02rs\x07q\x02\x02st\x07" +
		"v\x02\x02t\x0E\x03\x02\x02\x02uv\x07f\x02\x02vw\x07t\x02\x02wx\x07q\x02" +
		"\x02xy\x07r\x02\x02y\x10\x03\x02\x02\x02z{\x07u\x02\x02{|\x07g\x02\x02" +
		"|}\x07v\x02\x02}\x12\x03\x02\x02\x02~\x7F\x07r\x02\x02\x7F\x80\x07n\x02" +
		"\x02\x80\x81\x07q\x02\x02\x81\x82\x07v\x02\x02\x82\x14\x03\x02\x02\x02" +
		"\x83\x84\x07i\x02\x02\x84\x85\x07t\x02\x02\x85\x86\x07c\x02\x02\x86\x87" +
		"\x07d\x02\x02\x87\x16\x03\x02\x02\x02\x88\x89\x07q\x02\x02\x89\x8A\x07" +
		"t\x02\x02\x8A\x8B\x07d\x02\x02\x8B\x8C\x07k\x02\x02\x8C\x8D\x07v\x02\x02" +
		"\x8D\x18\x03\x02\x02\x02\x8E\x8F\x07o\x02\x02\x8F\x90\x07k\x02\x02\x90" +
		"\x91\x07p\x02\x02\x91\x92\x07g\x02\x02\x92\x1A\x03\x02\x02\x02\x93\x94" +
		"\x07e\x02\x02\x94\x95\x07n\x02\x02\x95\x96\x07q\x02\x02\x96\x97\x07w\x02" +
		"\x02\x97\x98\x07f\x02\x02\x98\x1C\x03\x02\x02\x02\x99\x9A\x07v\x02\x02" +
		"\x9A\x9B\x07q\x02\x02\x9B\x9C\x07t\x02\x02\x9C\x9D\x07r\x02\x02\x9D\x9E" +
		"\x07g\x02\x02\x9E\x9F\x07f\x02\x02\x9F\xA0\x07q\x02\x02\xA0\x1E\x03\x02" +
		"\x02\x02\xA1\xA2\x07i\x02\x02\xA2\xA3\x07w\x02\x02\xA3\xA4\x07p\x02\x02" +
		"\xA4 \x03\x02\x02\x02\xA5\xA6\x07n\x02\x02\xA6\xA7\x07c\x02\x02\xA7\xA8" +
		"\x07u\x02\x02\xA8\xA9\x07g\x02\x02\xA9\xAA\x07t\x02\x02\xAA\"\x03\x02" +
		"\x02\x02\xAB\xAC\x07u\x02\x02\xAC\xAD\x07j\x02\x02\xAD\xAE\x07k\x02\x02" +
		"\xAE\xAF\x07r\x02\x02\xAF$\x03\x02\x02\x02\xB0\xB1\x07u\x02\x02\xB1\xB2" +
		"\x07c\x02\x02\xB2\xB3\x07v\x02\x02\xB3\xB4\x07g\x02\x02\xB4\xB5\x07n\x02" +
		"\x02\xB5\xB6\x07n\x02\x02\xB6\xB7\x07k\x02\x02\xB7\xB8\x07v\x02\x02\xB8" +
		"\xB9\x07g\x02\x02\xB9&\x03\x02\x02\x02\xBA\xBB\x07u\x02\x02\xBB\xBC\x07" +
		"j\x02\x02\xBC\xBD\x07k\x02\x02\xBD\xBE\x07g\x02\x02\xBE\xBF\x07n\x02\x02" +
		"\xBF\xC8\x07f\x02\x02\xC0\xC1\x07u\x02\x02\xC1\xC2\x07j\x02\x02\xC2\xC3" +
		"\x07g\x02\x02\xC3\xC4\x07k\x02\x02\xC4\xC5\x07n\x02\x02\xC5\xC6\x07f\x02" +
		"\x02\xC6\xC8\x07u\x02\x02\xC7\xBA\x03\x02\x02\x02\xC7\xC0\x03\x02\x02" +
		"\x02\xC8(\x03\x02\x02\x02\xC9\xCA\x07h\x02\x02\xCA\xCB\x07w\x02\x02\xCB" +
		"\xCC\x07g\x02\x02\xCC\xCD\x07n\x02\x02\xCD*\x03\x02\x02\x02\xCE\xCF\x07" +
		"e\x02\x02\xCF\xD0\x07j\x02\x02\xD0\xD1\x07c\x02\x02\xD1\xD2\x07t\x02\x02" +
		"\xD2\xD3\x07i\x02\x02\xD3\xD4\x07g\x02\x02\xD4,\x03\x02\x02\x02\xD5\xD6" +
		"\x07r\x02\x02\xD6\xD7\x07q\x02\x02\xD7\xD8\x07y\x02\x02\xD8\xD9\x07g\x02" +
		"\x02\xD9\xDA\x07t\x02\x02\xDA.\x03\x02\x02\x02\xDB\xDC\x07?\x02\x02\xDC" +
		"0\x03\x02\x02\x02\xDD\xDE\x07>\x02\x02\xDE2\x03\x02\x02\x02\xDF\xE0\x07" +
		"@\x02\x02\xE04\x03\x02\x02\x02\xE1\xE2\x07*\x02\x02\xE26\x03\x02\x02\x02" +
		"\xE3\xE4\x07+\x02\x02\xE48\x03\x02\x02\x02\xE5\xE6\x07c\x02\x02\xE6\xE7" +
		"\x07p\x02\x02\xE7\xE8\x07f\x02\x02\xE8:\x03\x02\x02\x02\xE9\xEA\x07q\x02" +
		"\x02\xEA\xEB\x07t\x02\x02\xEB<\x03\x02\x02\x02\xEC\xED\x07v\x02\x02\xED" +
		"\xEE\x07q\x02\x02\xEE>\x03\x02\x02\x02\xEF\xF0\x07c\x02\x02\xF0\xF1\x07" +
		"v\x02\x02\xF1@\x03\x02\x02\x02\xF2\xF3\x07v\x02\x02\xF3B\x03\x02\x02\x02" +
		"\xF4\xF5\x07t\x02\x02\xF5D\x03\x02\x02\x02\xF6\xF7\x07c\x02\x02\xF7F\x03" +
		"\x02\x02\x02\xF8\xF9\x07g\x02\x02\xF9H\x03\x02\x02\x02\xFA\xFB\x07h\x02" +
		"\x02\xFB\xFC\x07t\x02\x02\xFC\xFD\x07q\x02\x02\xFD\xFE\x07p\x02\x02\xFE" +
		"\xFF\x07v\x02\x02\xFFJ\x03\x02\x02\x02\u0100\u0101\x07t\x02\x02\u0101" +
		"\u0102\x07g\x02\x02\u0102\u0103\x07c\x02\x02\u0103\u0104\x07t\x02\x02" +
		"\u0104L\x03\x02\x02\x02\u0105\u0106\x07\'\x02\x02\u0106N\x03\x02\x02\x02" +
		"\u0107\u0108\x071\x02\x02\u0108P\x03\x02\x02\x02\u0109\u010A\x07h\x02" +
		"\x02\u010A\u010B\x07w\x02\x02\u010B\u010C\x07n\x02\x02\u010C\u010D\x07" +
		"n\x02\x02\u010DR\x03\x02\x02\x02\u010E\u010F\x07j\x02\x02\u010F\u0110" +
		"\x07c\x02\x02\u0110\u0111\x07n\x02\x02\u0111\u0112\x07h\x02\x02\u0112" +
		"T\x03\x02\x02\x02\u0113\u0114\x07|\x02\x02\u0114\u0115\x07g\x02\x02\u0115" +
		"\u0116\x07t\x02\x02\u0116\u0117\x07q\x02\x02\u0117V\x03\x02\x02\x02\u0118" +
		"\u0119\x07y\x02\x02\u0119\u011A\x07k\x02\x02\u011A\u011B\x07v\x02\x02" +
		"\u011B\u011C\x07j\x02\x02\u011CX\x03\x02\x02\x02\b\x02Z_fk\xC7\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!spaceduelLexer.__ATN) {
			spaceduelLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(spaceduelLexer._serializedATN));
		}

		return spaceduelLexer.__ATN;
	}

}
