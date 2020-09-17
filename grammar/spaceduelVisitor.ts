// Generated from grammar/spaceduel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `spaceduelParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface spaceduelVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `spaceduelParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.orbitAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrbitAction?: (ctx: OrbitActionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.setAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAction?: (ctx: SetActionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.settable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSettable?: (ctx: SettableContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.fractionalSetting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFractionalSetting?: (ctx: FractionalSettingContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.shootAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShootAction?: (ctx: ShootActionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.shootable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShootable?: (ctx: ShootableContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.dropAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropAction?: (ctx: DropActionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.droppable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDroppable?: (ctx: DroppableContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.timeCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeCondition?: (ctx: TimeConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.radiusCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRadiusCondition?: (ctx: RadiusConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.angleCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAngleCondition?: (ctx: AngleConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `spaceduelParser.relop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelop?: (ctx: RelopContext) => Result;
}

