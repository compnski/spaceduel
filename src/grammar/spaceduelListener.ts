// Generated from grammar/spaceduel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./spaceduelParser";
import { ActionContext } from "./spaceduelParser";
import { OrbitActionContext } from "./spaceduelParser";
import { SetActionContext } from "./spaceduelParser";
import { SettableContext } from "./spaceduelParser";
import { FractionalSettingContext } from "./spaceduelParser";
import { ShootActionContext } from "./spaceduelParser";
import { ShootableContext } from "./spaceduelParser";
import { DropActionContext } from "./spaceduelParser";
import { DroppableContext } from "./spaceduelParser";
import { ConditionContext } from "./spaceduelParser";
import { TimeConditionContext } from "./spaceduelParser";
import { RadiusConditionContext } from "./spaceduelParser";
import { AngleConditionContext } from "./spaceduelParser";
import { RelopContext } from "./spaceduelParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `spaceduelParser`.
 */
export interface spaceduelListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `spaceduelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.orbitAction`.
	 * @param ctx the parse tree
	 */
	enterOrbitAction?: (ctx: OrbitActionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.orbitAction`.
	 * @param ctx the parse tree
	 */
	exitOrbitAction?: (ctx: OrbitActionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.setAction`.
	 * @param ctx the parse tree
	 */
	enterSetAction?: (ctx: SetActionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.setAction`.
	 * @param ctx the parse tree
	 */
	exitSetAction?: (ctx: SetActionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.settable`.
	 * @param ctx the parse tree
	 */
	enterSettable?: (ctx: SettableContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.settable`.
	 * @param ctx the parse tree
	 */
	exitSettable?: (ctx: SettableContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.fractionalSetting`.
	 * @param ctx the parse tree
	 */
	enterFractionalSetting?: (ctx: FractionalSettingContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.fractionalSetting`.
	 * @param ctx the parse tree
	 */
	exitFractionalSetting?: (ctx: FractionalSettingContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.shootAction`.
	 * @param ctx the parse tree
	 */
	enterShootAction?: (ctx: ShootActionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.shootAction`.
	 * @param ctx the parse tree
	 */
	exitShootAction?: (ctx: ShootActionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.shootable`.
	 * @param ctx the parse tree
	 */
	enterShootable?: (ctx: ShootableContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.shootable`.
	 * @param ctx the parse tree
	 */
	exitShootable?: (ctx: ShootableContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.dropAction`.
	 * @param ctx the parse tree
	 */
	enterDropAction?: (ctx: DropActionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.dropAction`.
	 * @param ctx the parse tree
	 */
	exitDropAction?: (ctx: DropActionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.droppable`.
	 * @param ctx the parse tree
	 */
	enterDroppable?: (ctx: DroppableContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.droppable`.
	 * @param ctx the parse tree
	 */
	exitDroppable?: (ctx: DroppableContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.timeCondition`.
	 * @param ctx the parse tree
	 */
	enterTimeCondition?: (ctx: TimeConditionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.timeCondition`.
	 * @param ctx the parse tree
	 */
	exitTimeCondition?: (ctx: TimeConditionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.radiusCondition`.
	 * @param ctx the parse tree
	 */
	enterRadiusCondition?: (ctx: RadiusConditionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.radiusCondition`.
	 * @param ctx the parse tree
	 */
	exitRadiusCondition?: (ctx: RadiusConditionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.angleCondition`.
	 * @param ctx the parse tree
	 */
	enterAngleCondition?: (ctx: AngleConditionContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.angleCondition`.
	 * @param ctx the parse tree
	 */
	exitAngleCondition?: (ctx: AngleConditionContext) => void;

	/**
	 * Enter a parse tree produced by `spaceduelParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `spaceduelParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;
}

