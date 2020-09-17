grammar spaceduel;

expression
    : action AT condition
    ;

action
    : shootAction
    | dropAction    
    | setAction
    | orbitAction 
    ;

orbitAction 
    : ORBIT AT R EQ NUMBER (E EQ NUMBER)?
    ;

setAction
    : SET settable TO fractionalSetting
    ;

settable
    : (FRONT | REAR) SHIELD (POWER | CHARGE)
    ;

fractionalSetting
    : NUMBER PERCENT
    | INTEGER DIV INTEGER
    | (FULL | HALF | ZERO)
    ;

shootAction 
    : SHOOT shootable (WITH fractionalSetting POWER)
    ;

shootable
    : GUN
    | LASER
    | TORPEDO
    ;

dropAction
    : DROP droppable
    ;

droppable
    : MINE
    | CLOUD
    ;

// Conditions

condition
    : timeCondition
    | radiusCondition
    | angleCondition
    | condition ( AND | OR ) condition
    | LPAREN condition RPAREN
    ;

timeCondition
    : T relop NUMBER
    ;

radiusCondition
    : R relop NUMBER
    ;

angleCondition
    : A relop NUMBER
    ;

relop
   : EQ
   | GT
   | LT
   ;

// ///////////
// Lexer
// ///////////

SIGNED_NUMBER
    : SIGN ? NUMBER
    ;

SIGNED_INTEGER  
    : SIGN ? INTEGER
    ;

NUMBER
    : INTEGER ('.' INTEGER)?
    ;

INTEGER
    : ('0' .. '9') +
    ;

SIGN : '-' ;

// Verbs
SHOOT : 'shoot' ;
DROP : 'drop';
SET : 'set';
PLOT : 'plot';
GRAB : 'grab';
ORBIT : 'orbit';

// Object Nouns
MINE : 'mine';
CLOUD : 'cloud';
TORPEDO : 'torpedo';
GUN : 'gun';
LASER : 'laser';
SHIP : 'ship';
SATELLITE: 'satellite';
SHIELD : 'shield' | 'sheilds' ;
FUEL : 'fuel';

// Quantifiable Nouns
CHARGE : 'charge';
POWER : 'power';


// Operators
EQ : '=';
LT : '<';
GT : '>';
LPAREN : '(';
RPAREN : ')';


AND : 'and';
OR : 'or';
TO : 'to';


// Prepositions
AT : 'at';
T : 't';
R : 'r';
A : 'a';
E : 'e';


FRONT : 'front';
REAR : 'rear';
PERCENT : '%';
DIV : '/';
FULL : 'full';
HALF : 'half';
ZERO : 'zero';
WITH : 'with';
