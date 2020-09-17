// Generated from grammar/spaceduel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { spaceduelListener } from "./spaceduelListener";
import { spaceduelVisitor } from "./spaceduelVisitor";


export class spaceduelParser extends Parser {
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
	public static readonly RULE_expression = 0;
	public static readonly RULE_action = 1;
	public static readonly RULE_orbitAction = 2;
	public static readonly RULE_setAction = 3;
	public static readonly RULE_settable = 4;
	public static readonly RULE_fractionalSetting = 5;
	public static readonly RULE_shootAction = 6;
	public static readonly RULE_shootable = 7;
	public static readonly RULE_dropAction = 8;
	public static readonly RULE_droppable = 9;
	public static readonly RULE_condition = 10;
	public static readonly RULE_timeCondition = 11;
	public static readonly RULE_radiusCondition = 12;
	public static readonly RULE_angleCondition = 13;
	public static readonly RULE_relop = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "action", "orbitAction", "setAction", "settable", "fractionalSetting", 
		"shootAction", "shootable", "dropAction", "droppable", "condition", "timeCondition", 
		"radiusCondition", "angleCondition", "relop",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(spaceduelParser._LITERAL_NAMES, spaceduelParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return spaceduelParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "spaceduel.g4"; }

	// @Override
	public get ruleNames(): string[] { return spaceduelParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return spaceduelParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(spaceduelParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, spaceduelParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.action();
			this.state = 31;
			this.match(spaceduelParser.AT);
			this.state = 32;
			this.condition(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, spaceduelParser.RULE_action);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spaceduelParser.SHOOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.shootAction();
				}
				break;
			case spaceduelParser.DROP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.dropAction();
				}
				break;
			case spaceduelParser.SET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.setAction();
				}
				break;
			case spaceduelParser.ORBIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.orbitAction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orbitAction(): OrbitActionContext {
		let _localctx: OrbitActionContext = new OrbitActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, spaceduelParser.RULE_orbitAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(spaceduelParser.ORBIT);
			this.state = 41;
			this.match(spaceduelParser.AT);
			this.state = 42;
			this.match(spaceduelParser.R);
			this.state = 43;
			this.match(spaceduelParser.EQ);
			this.state = 44;
			this.match(spaceduelParser.NUMBER);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === spaceduelParser.E) {
				{
				this.state = 45;
				this.match(spaceduelParser.E);
				this.state = 46;
				this.match(spaceduelParser.EQ);
				this.state = 47;
				this.match(spaceduelParser.NUMBER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setAction(): SetActionContext {
		let _localctx: SetActionContext = new SetActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, spaceduelParser.RULE_setAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(spaceduelParser.SET);
			this.state = 51;
			this.settable();
			this.state = 52;
			this.match(spaceduelParser.TO);
			this.state = 53;
			this.fractionalSetting();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public settable(): SettableContext {
		let _localctx: SettableContext = new SettableContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, spaceduelParser.RULE_settable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_la = this._input.LA(1);
			if (!(_la === spaceduelParser.FRONT || _la === spaceduelParser.REAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 56;
			this.match(spaceduelParser.SHIELD);
			this.state = 57;
			_la = this._input.LA(1);
			if (!(_la === spaceduelParser.CHARGE || _la === spaceduelParser.POWER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fractionalSetting(): FractionalSettingContext {
		let _localctx: FractionalSettingContext = new FractionalSettingContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, spaceduelParser.RULE_fractionalSetting);
		let _la: number;
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spaceduelParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.match(spaceduelParser.NUMBER);
				this.state = 60;
				this.match(spaceduelParser.PERCENT);
				}
				break;
			case spaceduelParser.INTEGER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.match(spaceduelParser.INTEGER);
				this.state = 62;
				this.match(spaceduelParser.DIV);
				this.state = 63;
				this.match(spaceduelParser.INTEGER);
				}
				break;
			case spaceduelParser.FULL:
			case spaceduelParser.HALF:
			case spaceduelParser.ZERO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				_la = this._input.LA(1);
				if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (spaceduelParser.FULL - 40)) | (1 << (spaceduelParser.HALF - 40)) | (1 << (spaceduelParser.ZERO - 40)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shootAction(): ShootActionContext {
		let _localctx: ShootActionContext = new ShootActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, spaceduelParser.RULE_shootAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(spaceduelParser.SHOOT);
			this.state = 68;
			this.shootable();
			{
			this.state = 69;
			this.match(spaceduelParser.WITH);
			this.state = 70;
			this.fractionalSetting();
			this.state = 71;
			this.match(spaceduelParser.POWER);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shootable(): ShootableContext {
		let _localctx: ShootableContext = new ShootableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, spaceduelParser.RULE_shootable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spaceduelParser.TORPEDO) | (1 << spaceduelParser.GUN) | (1 << spaceduelParser.LASER))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropAction(): DropActionContext {
		let _localctx: DropActionContext = new DropActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, spaceduelParser.RULE_dropAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(spaceduelParser.DROP);
			this.state = 76;
			this.droppable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public droppable(): DroppableContext {
		let _localctx: DroppableContext = new DroppableContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, spaceduelParser.RULE_droppable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			_la = this._input.LA(1);
			if (!(_la === spaceduelParser.MINE || _la === spaceduelParser.CLOUD)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, spaceduelParser.RULE_condition, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spaceduelParser.T:
				{
				this.state = 81;
				this.timeCondition();
				}
				break;
			case spaceduelParser.R:
				{
				this.state = 82;
				this.radiusCondition();
				}
				break;
			case spaceduelParser.A:
				{
				this.state = 83;
				this.angleCondition();
				}
				break;
			case spaceduelParser.LPAREN:
				{
				this.state = 84;
				this.match(spaceduelParser.LPAREN);
				this.state = 85;
				this.condition(0);
				this.state = 86;
				this.match(spaceduelParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 95;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, spaceduelParser.RULE_condition);
					this.state = 90;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 91;
					_la = this._input.LA(1);
					if (!(_la === spaceduelParser.AND || _la === spaceduelParser.OR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 92;
					this.condition(3);
					}
					}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeCondition(): TimeConditionContext {
		let _localctx: TimeConditionContext = new TimeConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, spaceduelParser.RULE_timeCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(spaceduelParser.T);
			this.state = 99;
			this.relop();
			this.state = 100;
			this.match(spaceduelParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public radiusCondition(): RadiusConditionContext {
		let _localctx: RadiusConditionContext = new RadiusConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, spaceduelParser.RULE_radiusCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(spaceduelParser.R);
			this.state = 103;
			this.relop();
			this.state = 104;
			this.match(spaceduelParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public angleCondition(): AngleConditionContext {
		let _localctx: AngleConditionContext = new AngleConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, spaceduelParser.RULE_angleCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(spaceduelParser.A);
			this.state = 107;
			this.relop();
			this.state = 108;
			this.match(spaceduelParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relop(): RelopContext {
		let _localctx: RelopContext = new RelopContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, spaceduelParser.RULE_relop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spaceduelParser.EQ) | (1 << spaceduelParser.LT) | (1 << spaceduelParser.GT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);
		}
		return true;
	}
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-s\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t" +
		"\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x043\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07D\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f[\n\f\x03\f\x03\f\x03\f\x07\f`\n\f\f\f" +
		"\x0E\fc\v\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x02\x02\x03\x16\x11" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02\t\x03\x02&\'\x03\x02" +
		"\x17\x18\x03\x02*,\x03\x02\x10\x12\x03\x02\x0E\x0F\x03\x02\x1E\x1F\x03" +
		"\x02\x19\x1B\x02m\x02 \x03\x02\x02\x02\x04(\x03\x02\x02\x02\x06*\x03\x02" +
		"\x02\x02\b4\x03\x02\x02\x02\n9\x03\x02\x02\x02\fC\x03\x02\x02\x02\x0E" +
		"E\x03\x02\x02\x02\x10K\x03\x02\x02\x02\x12M\x03\x02\x02\x02\x14P\x03\x02" +
		"\x02\x02\x16Z\x03\x02\x02\x02\x18d\x03\x02\x02\x02\x1Ah\x03\x02\x02\x02" +
		"\x1Cl\x03\x02\x02\x02\x1Ep\x03\x02\x02\x02 !\x05\x04\x03\x02!\"\x07!\x02" +
		"\x02\"#\x05\x16\f\x02#\x03\x03\x02\x02\x02$)\x05\x0E\b\x02%)\x05\x12\n" +
		"\x02&)\x05\b\x05\x02\')\x05\x06\x04\x02($\x03\x02\x02\x02(%\x03\x02\x02" +
		"\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)\x05\x03\x02\x02\x02*+\x07\r" +
		"\x02\x02+,\x07!\x02\x02,-\x07#\x02\x02-.\x07\x19\x02\x02.2\x07\x05\x02" +
		"\x02/0\x07%\x02\x0201\x07\x19\x02\x0213\x07\x05\x02\x022/\x03\x02\x02" +
		"\x0223\x03\x02\x02\x023\x07\x03\x02\x02\x0245\x07\n\x02\x0256\x05\n\x06" +
		"\x0267\x07 \x02\x0278\x05\f\x07\x028\t\x03\x02\x02\x029:\t\x02\x02\x02" +
		":;\x07\x15\x02\x02;<\t\x03\x02\x02<\v\x03\x02\x02\x02=>\x07\x05\x02\x02" +
		">D\x07(\x02\x02?@\x07\x06\x02\x02@A\x07)\x02\x02AD\x07\x06\x02\x02BD\t" +
		"\x04\x02\x02C=\x03\x02\x02\x02C?\x03\x02\x02\x02CB\x03\x02\x02\x02D\r" +
		"\x03\x02\x02\x02EF\x07\b\x02\x02FG\x05\x10\t\x02GH\x07-\x02\x02HI\x05" +
		"\f\x07\x02IJ\x07\x18\x02\x02J\x0F\x03\x02\x02\x02KL\t\x05\x02\x02L\x11" +
		"\x03\x02\x02\x02MN\x07\t\x02\x02NO\x05\x14\v\x02O\x13\x03\x02\x02\x02" +
		"PQ\t\x06\x02\x02Q\x15\x03\x02\x02\x02RS\b\f\x01\x02S[\x05\x18\r\x02T[" +
		"\x05\x1A\x0E\x02U[\x05\x1C\x0F\x02VW\x07\x1C\x02\x02WX\x05\x16\f\x02X" +
		"Y\x07\x1D\x02\x02Y[\x03\x02\x02\x02ZR\x03\x02\x02\x02ZT\x03\x02\x02\x02" +
		"ZU\x03\x02\x02\x02ZV\x03\x02\x02\x02[a\x03\x02\x02\x02\\]\f\x04\x02\x02" +
		"]^\t\x07\x02\x02^`\x05\x16\f\x05_\\\x03\x02\x02\x02`c\x03\x02\x02\x02" +
		"a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\x17\x03\x02\x02\x02ca\x03\x02\x02" +
		"\x02de\x07\"\x02\x02ef\x05\x1E\x10\x02fg\x07\x05\x02\x02g\x19\x03\x02" +
		"\x02\x02hi\x07#\x02\x02ij\x05\x1E\x10\x02jk\x07\x05\x02\x02k\x1B\x03\x02" +
		"\x02\x02lm\x07$\x02\x02mn\x05\x1E\x10\x02no\x07\x05\x02\x02o\x1D\x03\x02" +
		"\x02\x02pq\t\b\x02\x02q\x1F\x03\x02\x02\x02\x07(2CZa";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!spaceduelParser.__ATN) {
			spaceduelParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(spaceduelParser._serializedATN));
		}

		return spaceduelParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public action(): ActionContext {
		return this.getRuleContext(0, ActionContext);
	}
	public AT(): TerminalNode { return this.getToken(spaceduelParser.AT, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_expression; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public shootAction(): ShootActionContext | undefined {
		return this.tryGetRuleContext(0, ShootActionContext);
	}
	public dropAction(): DropActionContext | undefined {
		return this.tryGetRuleContext(0, DropActionContext);
	}
	public setAction(): SetActionContext | undefined {
		return this.tryGetRuleContext(0, SetActionContext);
	}
	public orbitAction(): OrbitActionContext | undefined {
		return this.tryGetRuleContext(0, OrbitActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_action; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrbitActionContext extends ParserRuleContext {
	public ORBIT(): TerminalNode { return this.getToken(spaceduelParser.ORBIT, 0); }
	public AT(): TerminalNode { return this.getToken(spaceduelParser.AT, 0); }
	public R(): TerminalNode { return this.getToken(spaceduelParser.R, 0); }
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spaceduelParser.EQ);
		} else {
			return this.getToken(spaceduelParser.EQ, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spaceduelParser.NUMBER);
		} else {
			return this.getToken(spaceduelParser.NUMBER, i);
		}
	}
	public E(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.E, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_orbitAction; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterOrbitAction) {
			listener.enterOrbitAction(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitOrbitAction) {
			listener.exitOrbitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitOrbitAction) {
			return visitor.visitOrbitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetActionContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(spaceduelParser.SET, 0); }
	public settable(): SettableContext {
		return this.getRuleContext(0, SettableContext);
	}
	public TO(): TerminalNode { return this.getToken(spaceduelParser.TO, 0); }
	public fractionalSetting(): FractionalSettingContext {
		return this.getRuleContext(0, FractionalSettingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_setAction; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterSetAction) {
			listener.enterSetAction(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitSetAction) {
			listener.exitSetAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitSetAction) {
			return visitor.visitSetAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SettableContext extends ParserRuleContext {
	public SHIELD(): TerminalNode { return this.getToken(spaceduelParser.SHIELD, 0); }
	public FRONT(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.FRONT, 0); }
	public REAR(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.REAR, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.POWER, 0); }
	public CHARGE(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.CHARGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_settable; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterSettable) {
			listener.enterSettable(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitSettable) {
			listener.exitSettable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitSettable) {
			return visitor.visitSettable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FractionalSettingContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.NUMBER, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.PERCENT, 0); }
	public INTEGER(): TerminalNode[];
	public INTEGER(i: number): TerminalNode;
	public INTEGER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spaceduelParser.INTEGER);
		} else {
			return this.getToken(spaceduelParser.INTEGER, i);
		}
	}
	public DIV(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.DIV, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.FULL, 0); }
	public HALF(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.HALF, 0); }
	public ZERO(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.ZERO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_fractionalSetting; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterFractionalSetting) {
			listener.enterFractionalSetting(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitFractionalSetting) {
			listener.exitFractionalSetting(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitFractionalSetting) {
			return visitor.visitFractionalSetting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShootActionContext extends ParserRuleContext {
	public SHOOT(): TerminalNode { return this.getToken(spaceduelParser.SHOOT, 0); }
	public shootable(): ShootableContext {
		return this.getRuleContext(0, ShootableContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.WITH, 0); }
	public fractionalSetting(): FractionalSettingContext | undefined {
		return this.tryGetRuleContext(0, FractionalSettingContext);
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.POWER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_shootAction; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterShootAction) {
			listener.enterShootAction(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitShootAction) {
			listener.exitShootAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitShootAction) {
			return visitor.visitShootAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShootableContext extends ParserRuleContext {
	public GUN(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.GUN, 0); }
	public LASER(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.LASER, 0); }
	public TORPEDO(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.TORPEDO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_shootable; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterShootable) {
			listener.enterShootable(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitShootable) {
			listener.exitShootable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitShootable) {
			return visitor.visitShootable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropActionContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(spaceduelParser.DROP, 0); }
	public droppable(): DroppableContext {
		return this.getRuleContext(0, DroppableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_dropAction; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterDropAction) {
			listener.enterDropAction(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitDropAction) {
			listener.exitDropAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitDropAction) {
			return visitor.visitDropAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DroppableContext extends ParserRuleContext {
	public MINE(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.MINE, 0); }
	public CLOUD(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.CLOUD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_droppable; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterDroppable) {
			listener.enterDroppable(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitDroppable) {
			listener.exitDroppable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitDroppable) {
			return visitor.visitDroppable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public timeCondition(): TimeConditionContext | undefined {
		return this.tryGetRuleContext(0, TimeConditionContext);
	}
	public radiusCondition(): RadiusConditionContext | undefined {
		return this.tryGetRuleContext(0, RadiusConditionContext);
	}
	public angleCondition(): AngleConditionContext | undefined {
		return this.tryGetRuleContext(0, AngleConditionContext);
	}
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.OR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_condition; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeConditionContext extends ParserRuleContext {
	public T(): TerminalNode { return this.getToken(spaceduelParser.T, 0); }
	public relop(): RelopContext {
		return this.getRuleContext(0, RelopContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(spaceduelParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_timeCondition; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterTimeCondition) {
			listener.enterTimeCondition(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitTimeCondition) {
			listener.exitTimeCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitTimeCondition) {
			return visitor.visitTimeCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RadiusConditionContext extends ParserRuleContext {
	public R(): TerminalNode { return this.getToken(spaceduelParser.R, 0); }
	public relop(): RelopContext {
		return this.getRuleContext(0, RelopContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(spaceduelParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_radiusCondition; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterRadiusCondition) {
			listener.enterRadiusCondition(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitRadiusCondition) {
			listener.exitRadiusCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitRadiusCondition) {
			return visitor.visitRadiusCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AngleConditionContext extends ParserRuleContext {
	public A(): TerminalNode { return this.getToken(spaceduelParser.A, 0); }
	public relop(): RelopContext {
		return this.getRuleContext(0, RelopContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(spaceduelParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_angleCondition; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterAngleCondition) {
			listener.enterAngleCondition(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitAngleCondition) {
			listener.exitAngleCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitAngleCondition) {
			return visitor.visitAngleCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(spaceduelParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spaceduelParser.RULE_relop; }
	// @Override
	public enterRule(listener: spaceduelListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: spaceduelListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spaceduelVisitor<Result>): Result {
		if (visitor.visitRelop) {
			return visitor.visitRelop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


