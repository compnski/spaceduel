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


export class SpaceDuelGrammerLexer extends Lexer {
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
	public static readonly TORPDEO = 14;
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
	public static readonly AND = 26;
	public static readonly OR = 27;
	public static readonly AT = 28;
	public static readonly T = 29;
	public static readonly R = 30;
	public static readonly A = 31;
	public static readonly E = 32;
	public static readonly FRONT = 33;
	public static readonly REAR = 34;
	public static readonly PERCENT = 35;
	public static readonly DIV = 36;
	public static readonly FULL = 37;
	public static readonly HALF = 38;
	public static readonly ZERO = 39;

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
		"DROP", "SET", "PLOT", "GRAB", "ORBIT", "MINE", "CLOUD", "TORPDEO", "GUN", 
		"LASER", "SHIP", "SATELLITE", "SHIELD", "FUEL", "CHARGE", "POWER", "EQ", 
		"LT", "GT", "AND", "OR", "AT", "T", "R", "A", "E", "FRONT", "REAR", "PERCENT", 
		"DIV", "FULL", "HALF", "ZERO",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'-'", "'shoot'", 
		"'drop'", "'set'", "'plot'", "'grab'", "'orbit'", "'mine'", "'cloud'", 
		"'torpdeo'", "'gun'", "'laser'", "'ship'", "'satellite'", undefined, "'fuel'", 
		"'charge'", "'power'", "'='", "'<'", "'>'", "'and'", "'or'", "'at'", "'t'", 
		"'r'", "'a'", "'e'", "'front'", "'rear'", "'%'", "'/'", "'full'", "'half'", 
		"'zero'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SIGNED_NUMBER", "SIGNED_INTEGER", "NUMBER", "INTEGER", "SIGN", 
		"SHOOT", "DROP", "SET", "PLOT", "GRAB", "ORBIT", "MINE", "CLOUD", "TORPDEO", 
		"GUN", "LASER", "SHIP", "SATELLITE", "SHIELD", "FUEL", "CHARGE", "POWER", 
		"EQ", "LT", "GT", "AND", "OR", "AT", "T", "R", "A", "E", "FRONT", "REAR", 
		"PERCENT", "DIV", "FULL", "HALF", "ZERO",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SpaceDuelGrammerLexer._LITERAL_NAMES, SpaceDuelGrammerLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SpaceDuelGrammerLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SpaceDuelGrammerLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "spaceduel.g4"; }

	// @Override
	public get ruleNames(): string[] { return SpaceDuelGrammerLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SpaceDuelGrammerLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SpaceDuelGrammerLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SpaceDuelGrammerLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02)\u0109\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x05\x02S" +
		"\n\x02\x03\x02\x03\x02\x03\x03\x05\x03X\n\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x05\x04_\n\x04\x03\x05\x06\x05b\n\x05\r\x05\x0E\x05c" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\xC0\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03$\x03" +
		"$\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03(\x03(\x02\x02\x02)\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
		"\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02" +
		"$G\x02%I\x02&K\x02\'M\x02(O\x02)\x03\x02\x02\x02\u010D\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x03R\x03\x02" +
		"\x02\x02\x05W\x03\x02\x02\x02\x07[\x03\x02\x02\x02\ta\x03\x02\x02\x02" +
		"\ve\x03\x02\x02\x02\rg\x03\x02\x02\x02\x0Fm\x03\x02\x02\x02\x11r\x03\x02" +
		"\x02\x02\x13v\x03\x02\x02\x02\x15{\x03\x02\x02\x02\x17\x80\x03\x02\x02" +
		"\x02\x19\x86\x03\x02\x02\x02\x1B\x8B\x03\x02\x02\x02\x1D\x91\x03\x02\x02" +
		"\x02\x1F\x99\x03\x02\x02\x02!\x9D\x03\x02\x02\x02#\xA3\x03\x02\x02\x02" +
		"%\xA8\x03\x02\x02\x02\'\xBF\x03\x02\x02\x02)\xC1\x03\x02\x02\x02+\xC6" +
		"\x03\x02\x02\x02-\xCD\x03\x02\x02\x02/\xD3\x03\x02\x02\x021\xD5\x03\x02" +
		"\x02\x023\xD7\x03\x02\x02\x025\xD9\x03\x02\x02\x027\xDD\x03\x02\x02\x02" +
		"9\xE0\x03\x02\x02\x02;\xE3\x03\x02\x02\x02=\xE5\x03\x02\x02\x02?\xE7\x03" +
		"\x02\x02\x02A\xE9\x03\x02\x02\x02C\xEB\x03\x02\x02\x02E\xF1\x03\x02\x02" +
		"\x02G\xF6\x03\x02\x02\x02I\xF8\x03\x02\x02\x02K\xFA\x03\x02\x02\x02M\xFF" +
		"\x03\x02\x02\x02O\u0104\x03\x02\x02\x02QS\x05\v\x06\x02RQ\x03\x02\x02" +
		"\x02RS\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x05\x07\x04\x02U\x04\x03\x02" +
		"\x02\x02VX\x05\v\x06\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02" +
		"\x02\x02YZ\x05\t\x05\x02Z\x06\x03\x02\x02\x02[^\x05\t\x05\x02\\]\x070" +
		"\x02\x02]_\x05\t\x05\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\b\x03\x02" +
		"\x02\x02`b\x042;\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02" +
		"\x02cd\x03\x02\x02\x02d\n\x03\x02\x02\x02ef\x07/\x02\x02f\f\x03\x02\x02" +
		"\x02gh\x07u\x02\x02hi\x07j\x02\x02ij\x07q\x02\x02jk\x07q\x02\x02kl\x07" +
		"v\x02\x02l\x0E\x03\x02\x02\x02mn\x07f\x02\x02no\x07t\x02\x02op\x07q\x02" +
		"\x02pq\x07r\x02\x02q\x10\x03\x02\x02\x02rs\x07u\x02\x02st\x07g\x02\x02" +
		"tu\x07v\x02\x02u\x12\x03\x02\x02\x02vw\x07r\x02\x02wx\x07n\x02\x02xy\x07" +
		"q\x02\x02yz\x07v\x02\x02z\x14\x03\x02\x02\x02{|\x07i\x02\x02|}\x07t\x02" +
		"\x02}~\x07c\x02\x02~\x7F\x07d\x02\x02\x7F\x16\x03\x02\x02\x02\x80\x81" +
		"\x07q\x02\x02\x81\x82\x07t\x02\x02\x82\x83\x07d\x02\x02\x83\x84\x07k\x02" +
		"\x02\x84\x85\x07v\x02\x02\x85\x18\x03\x02\x02\x02\x86\x87\x07o\x02\x02" +
		"\x87\x88\x07k\x02\x02\x88\x89\x07p\x02\x02\x89\x8A\x07g\x02\x02\x8A\x1A" +
		"\x03\x02\x02\x02\x8B\x8C\x07e\x02\x02\x8C\x8D\x07n\x02\x02\x8D\x8E\x07" +
		"q\x02\x02\x8E\x8F\x07w\x02\x02\x8F\x90\x07f\x02\x02\x90\x1C\x03\x02\x02" +
		"\x02\x91\x92\x07v\x02\x02\x92\x93\x07q\x02\x02\x93\x94\x07t\x02\x02\x94" +
		"\x95\x07r\x02\x02\x95\x96\x07f\x02\x02\x96\x97\x07g\x02\x02\x97\x98\x07" +
		"q\x02\x02\x98\x1E\x03\x02\x02\x02\x99\x9A\x07i\x02\x02\x9A\x9B\x07w\x02" +
		"\x02\x9B\x9C\x07p\x02\x02\x9C \x03\x02\x02\x02\x9D\x9E\x07n\x02\x02\x9E" +
		"\x9F\x07c\x02\x02\x9F\xA0\x07u\x02\x02\xA0\xA1\x07g\x02\x02\xA1\xA2\x07" +
		"t\x02\x02\xA2\"\x03\x02\x02\x02\xA3\xA4\x07u\x02\x02\xA4\xA5\x07j\x02" +
		"\x02\xA5\xA6\x07k\x02\x02\xA6\xA7\x07r\x02\x02\xA7$\x03\x02\x02\x02\xA8" +
		"\xA9\x07u\x02\x02\xA9\xAA\x07c\x02\x02\xAA\xAB\x07v\x02\x02\xAB\xAC\x07" +
		"g\x02\x02\xAC\xAD\x07n\x02\x02\xAD\xAE\x07n\x02\x02\xAE\xAF\x07k\x02\x02" +
		"\xAF\xB0\x07v\x02\x02\xB0\xB1\x07g\x02\x02\xB1&\x03\x02\x02\x02\xB2\xB3" +
		"\x07u\x02\x02\xB3\xB4\x07j\x02\x02\xB4\xB5\x07k\x02\x02\xB5\xB6\x07g\x02" +
		"\x02\xB6\xB7\x07n\x02\x02\xB7\xC0\x07f\x02\x02\xB8\xB9\x07u\x02\x02\xB9" +
		"\xBA\x07j\x02\x02\xBA\xBB\x07g\x02\x02\xBB\xBC\x07k\x02\x02\xBC\xBD\x07" +
		"n\x02\x02\xBD\xBE\x07f\x02\x02\xBE\xC0\x07u\x02\x02\xBF\xB2\x03\x02\x02" +
		"\x02\xBF\xB8\x03\x02\x02\x02\xC0(\x03\x02\x02\x02\xC1\xC2\x07h\x02\x02" +
		"\xC2\xC3\x07w\x02\x02\xC3\xC4\x07g\x02\x02\xC4\xC5\x07n\x02\x02\xC5*\x03" +
		"\x02\x02\x02\xC6\xC7\x07e\x02\x02\xC7\xC8\x07j\x02\x02\xC8\xC9\x07c\x02" +
		"\x02\xC9\xCA\x07t\x02\x02\xCA\xCB\x07i\x02\x02\xCB\xCC\x07g\x02\x02\xCC" +
		",\x03\x02\x02\x02\xCD\xCE\x07r\x02\x02\xCE\xCF\x07q\x02\x02\xCF\xD0\x07" +
		"y\x02\x02\xD0\xD1\x07g\x02\x02\xD1\xD2\x07t\x02\x02\xD2.\x03\x02\x02\x02" +
		"\xD3\xD4\x07?\x02\x02\xD40\x03\x02\x02\x02\xD5\xD6\x07>\x02\x02\xD62\x03" +
		"\x02\x02\x02\xD7\xD8\x07@\x02\x02\xD84\x03\x02\x02\x02\xD9\xDA\x07c\x02" +
		"\x02\xDA\xDB\x07p\x02\x02\xDB\xDC\x07f\x02\x02\xDC6\x03\x02\x02\x02\xDD" +
		"\xDE\x07q\x02\x02\xDE\xDF\x07t\x02\x02\xDF8\x03\x02\x02\x02\xE0\xE1\x07" +
		"c\x02\x02\xE1\xE2\x07v\x02\x02\xE2:\x03\x02\x02\x02\xE3\xE4\x07v\x02\x02" +
		"\xE4<\x03\x02\x02\x02\xE5\xE6\x07t\x02\x02\xE6>\x03\x02\x02\x02\xE7\xE8" +
		"\x07c\x02\x02\xE8@\x03\x02\x02\x02\xE9\xEA\x07g\x02\x02\xEAB\x03\x02\x02" +
		"\x02\xEB\xEC\x07h\x02\x02\xEC\xED\x07t\x02\x02\xED\xEE\x07q\x02\x02\xEE" +
		"\xEF\x07p\x02\x02\xEF\xF0\x07v\x02\x02\xF0D\x03\x02\x02\x02\xF1\xF2\x07" +
		"t\x02\x02\xF2\xF3\x07g\x02\x02\xF3\xF4\x07c\x02\x02\xF4\xF5\x07t\x02\x02" +
		"\xF5F\x03\x02\x02\x02\xF6\xF7\x07\'\x02\x02\xF7H\x03\x02\x02\x02\xF8\xF9" +
		"\x071\x02\x02\xF9J\x03\x02\x02\x02\xFA\xFB\x07h\x02\x02\xFB\xFC\x07w\x02" +
		"\x02\xFC\xFD\x07n\x02\x02\xFD\xFE\x07n\x02\x02\xFEL\x03\x02\x02\x02\xFF" +
		"\u0100\x07j\x02\x02\u0100\u0101\x07c\x02\x02\u0101\u0102\x07n\x02\x02" +
		"\u0102\u0103\x07h\x02\x02\u0103N\x03\x02\x02\x02\u0104\u0105\x07|\x02" +
		"\x02\u0105\u0106\x07g\x02\x02\u0106\u0107\x07t\x02\x02\u0107\u0108\x07" +
		"q\x02\x02\u0108P\x03\x02\x02\x02\b\x02RW^c\xBF\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SpaceDuelGrammerLexer.__ATN) {
			SpaceDuelGrammerLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SpaceDuelGrammerLexer._serializedATN));
		}

		return SpaceDuelGrammerLexer.__ATN;
	}

}
