
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model hl_user
 * *
 * * This is the user mapping table for platform users to Human labs users
 * * This is to support custom authentication systems per user basis from HL side 
 * * NOTE : this will not create a dedicated user in Label studio, this is just a mapping table
 * * also the platform_user_id will be the id used through out other tables to refer to the user
 * * platform_user_id refers to the user id in the platform's own user management system
 */
export type hl_user = $Result.DefaultSelection<Prisma.$hl_userPayload>
/**
 * Model hl_user_project_role
 * *
 * * This is an association table mapping users to projects with specific roles
 * * A user can have multiple roles in different projects
 * * Roles can be : annotator, reviewer (for now at least)
 * * Question: hwo will this be configured ? or the eligibility be configured ?
 */
export type hl_user_project_role = $Result.DefaultSelection<Prisma.$hl_user_project_rolePayload>
/**
 * Model hl_project
 * *
 * * This is the main project table
 * * Each project will have multiple stages defined in the project_pipeline_stage table 
 *     (not part of poc but adding for future references)
 * * Each stage will have tasks defined in the hl_task table
 * * This will also have a reference to the annotator project id in annotator platform (label studio)
 * * The stage_order will define the order of stages in the project pipeline 
 *     NOTE: the order will be exactly as defined in the string with comma separation
 * * current_stage will define the current stage of the project
 */
export type hl_project = $Result.DefaultSelection<Prisma.$hl_projectPayload>
/**
 * Model project_pipeline_stage
 * *
 * * This table defines the stages in a project pipeline
 * * Each stage will have its own custom config as per the type (collection, annotation, review/qcs)
 * * Improvements: ideally this should be a nosql thing as the config can be complex and dynamic
 * * but for poc purposes keeping it simple
 * * this will have reference to the project id in hl_project table
 *   NOTE:this is the project_id in human labs not the LABEL STUDIO project id
 */
export type project_pipeline_stage = $Result.DefaultSelection<Prisma.$project_pipeline_stagePayload>
/**
 * Model hl_user_task
 * *
 * * This is an association table mapping users to tasks
 * * so this will have reference to platform_user_id and task_id
 * * assigned_at will have the timestamp when the task was assigned
 * * task_expiry will have the timestamp when the task is expected to be completed
 * * completed_at will have the timestamp when the task was actually completed
 *   FLOW: might run a cron job or schedular to check for expired tasks and notify users or make the task open again
 */
export type hl_user_task = $Result.DefaultSelection<Prisma.$hl_user_taskPayload>
/**
 * Model hl_task
 * *
 * * This is the main task table
 * * Each task will have reference to the project it belongs to
 * * and also the annotator_task_id in the annotator platform (label studio)
 * * type will define the type of task (collection, annotation, review/qc)
 * * status will define the current status of the task (assigned, open, completed)
 */
export type hl_task = $Result.DefaultSelection<Prisma.$hl_taskPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hl_users
 * const hl_users = await prisma.hl_user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hl_users
   * const hl_users = await prisma.hl_user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hl_user`: Exposes CRUD operations for the **hl_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hl_users
    * const hl_users = await prisma.hl_user.findMany()
    * ```
    */
  get hl_user(): Prisma.hl_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hl_user_project_role`: Exposes CRUD operations for the **hl_user_project_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hl_user_project_roles
    * const hl_user_project_roles = await prisma.hl_user_project_role.findMany()
    * ```
    */
  get hl_user_project_role(): Prisma.hl_user_project_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hl_project`: Exposes CRUD operations for the **hl_project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hl_projects
    * const hl_projects = await prisma.hl_project.findMany()
    * ```
    */
  get hl_project(): Prisma.hl_projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_pipeline_stage`: Exposes CRUD operations for the **project_pipeline_stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_pipeline_stages
    * const project_pipeline_stages = await prisma.project_pipeline_stage.findMany()
    * ```
    */
  get project_pipeline_stage(): Prisma.project_pipeline_stageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hl_user_task`: Exposes CRUD operations for the **hl_user_task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hl_user_tasks
    * const hl_user_tasks = await prisma.hl_user_task.findMany()
    * ```
    */
  get hl_user_task(): Prisma.hl_user_taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hl_task`: Exposes CRUD operations for the **hl_task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hl_tasks
    * const hl_tasks = await prisma.hl_task.findMany()
    * ```
    */
  get hl_task(): Prisma.hl_taskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    hl_user: 'hl_user',
    hl_user_project_role: 'hl_user_project_role',
    hl_project: 'hl_project',
    project_pipeline_stage: 'project_pipeline_stage',
    hl_user_task: 'hl_user_task',
    hl_task: 'hl_task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hl_user" | "hl_user_project_role" | "hl_project" | "project_pipeline_stage" | "hl_user_task" | "hl_task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      hl_user: {
        payload: Prisma.$hl_userPayload<ExtArgs>
        fields: Prisma.hl_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hl_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hl_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>
          }
          findFirst: {
            args: Prisma.hl_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hl_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>
          }
          findMany: {
            args: Prisma.hl_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>[]
          }
          create: {
            args: Prisma.hl_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>
          }
          createMany: {
            args: Prisma.hl_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hl_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>[]
          }
          delete: {
            args: Prisma.hl_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>
          }
          update: {
            args: Prisma.hl_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>
          }
          deleteMany: {
            args: Prisma.hl_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hl_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hl_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>[]
          }
          upsert: {
            args: Prisma.hl_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_userPayload>
          }
          aggregate: {
            args: Prisma.Hl_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHl_user>
          }
          groupBy: {
            args: Prisma.hl_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hl_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.hl_userCountArgs<ExtArgs>
            result: $Utils.Optional<Hl_userCountAggregateOutputType> | number
          }
        }
      }
      hl_user_project_role: {
        payload: Prisma.$hl_user_project_rolePayload<ExtArgs>
        fields: Prisma.hl_user_project_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hl_user_project_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hl_user_project_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>
          }
          findFirst: {
            args: Prisma.hl_user_project_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hl_user_project_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>
          }
          findMany: {
            args: Prisma.hl_user_project_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>[]
          }
          create: {
            args: Prisma.hl_user_project_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>
          }
          createMany: {
            args: Prisma.hl_user_project_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hl_user_project_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>[]
          }
          delete: {
            args: Prisma.hl_user_project_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>
          }
          update: {
            args: Prisma.hl_user_project_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>
          }
          deleteMany: {
            args: Prisma.hl_user_project_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hl_user_project_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hl_user_project_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>[]
          }
          upsert: {
            args: Prisma.hl_user_project_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_project_rolePayload>
          }
          aggregate: {
            args: Prisma.Hl_user_project_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHl_user_project_role>
          }
          groupBy: {
            args: Prisma.hl_user_project_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hl_user_project_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.hl_user_project_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Hl_user_project_roleCountAggregateOutputType> | number
          }
        }
      }
      hl_project: {
        payload: Prisma.$hl_projectPayload<ExtArgs>
        fields: Prisma.hl_projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hl_projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hl_projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>
          }
          findFirst: {
            args: Prisma.hl_projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hl_projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>
          }
          findMany: {
            args: Prisma.hl_projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>[]
          }
          create: {
            args: Prisma.hl_projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>
          }
          createMany: {
            args: Prisma.hl_projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hl_projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>[]
          }
          delete: {
            args: Prisma.hl_projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>
          }
          update: {
            args: Prisma.hl_projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>
          }
          deleteMany: {
            args: Prisma.hl_projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hl_projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hl_projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>[]
          }
          upsert: {
            args: Prisma.hl_projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_projectPayload>
          }
          aggregate: {
            args: Prisma.Hl_projectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHl_project>
          }
          groupBy: {
            args: Prisma.hl_projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hl_projectGroupByOutputType>[]
          }
          count: {
            args: Prisma.hl_projectCountArgs<ExtArgs>
            result: $Utils.Optional<Hl_projectCountAggregateOutputType> | number
          }
        }
      }
      project_pipeline_stage: {
        payload: Prisma.$project_pipeline_stagePayload<ExtArgs>
        fields: Prisma.project_pipeline_stageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_pipeline_stageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_pipeline_stageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>
          }
          findFirst: {
            args: Prisma.project_pipeline_stageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_pipeline_stageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>
          }
          findMany: {
            args: Prisma.project_pipeline_stageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>[]
          }
          create: {
            args: Prisma.project_pipeline_stageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>
          }
          createMany: {
            args: Prisma.project_pipeline_stageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_pipeline_stageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>[]
          }
          delete: {
            args: Prisma.project_pipeline_stageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>
          }
          update: {
            args: Prisma.project_pipeline_stageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>
          }
          deleteMany: {
            args: Prisma.project_pipeline_stageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_pipeline_stageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_pipeline_stageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>[]
          }
          upsert: {
            args: Prisma.project_pipeline_stageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_pipeline_stagePayload>
          }
          aggregate: {
            args: Prisma.Project_pipeline_stageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_pipeline_stage>
          }
          groupBy: {
            args: Prisma.project_pipeline_stageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_pipeline_stageGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_pipeline_stageCountArgs<ExtArgs>
            result: $Utils.Optional<Project_pipeline_stageCountAggregateOutputType> | number
          }
        }
      }
      hl_user_task: {
        payload: Prisma.$hl_user_taskPayload<ExtArgs>
        fields: Prisma.hl_user_taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hl_user_taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hl_user_taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>
          }
          findFirst: {
            args: Prisma.hl_user_taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hl_user_taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>
          }
          findMany: {
            args: Prisma.hl_user_taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>[]
          }
          create: {
            args: Prisma.hl_user_taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>
          }
          createMany: {
            args: Prisma.hl_user_taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hl_user_taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>[]
          }
          delete: {
            args: Prisma.hl_user_taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>
          }
          update: {
            args: Prisma.hl_user_taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>
          }
          deleteMany: {
            args: Prisma.hl_user_taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hl_user_taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hl_user_taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>[]
          }
          upsert: {
            args: Prisma.hl_user_taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_user_taskPayload>
          }
          aggregate: {
            args: Prisma.Hl_user_taskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHl_user_task>
          }
          groupBy: {
            args: Prisma.hl_user_taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hl_user_taskGroupByOutputType>[]
          }
          count: {
            args: Prisma.hl_user_taskCountArgs<ExtArgs>
            result: $Utils.Optional<Hl_user_taskCountAggregateOutputType> | number
          }
        }
      }
      hl_task: {
        payload: Prisma.$hl_taskPayload<ExtArgs>
        fields: Prisma.hl_taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hl_taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hl_taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>
          }
          findFirst: {
            args: Prisma.hl_taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hl_taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>
          }
          findMany: {
            args: Prisma.hl_taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>[]
          }
          create: {
            args: Prisma.hl_taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>
          }
          createMany: {
            args: Prisma.hl_taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hl_taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>[]
          }
          delete: {
            args: Prisma.hl_taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>
          }
          update: {
            args: Prisma.hl_taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>
          }
          deleteMany: {
            args: Prisma.hl_taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hl_taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hl_taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>[]
          }
          upsert: {
            args: Prisma.hl_taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hl_taskPayload>
          }
          aggregate: {
            args: Prisma.Hl_taskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHl_task>
          }
          groupBy: {
            args: Prisma.hl_taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hl_taskGroupByOutputType>[]
          }
          count: {
            args: Prisma.hl_taskCountArgs<ExtArgs>
            result: $Utils.Optional<Hl_taskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    hl_user?: hl_userOmit
    hl_user_project_role?: hl_user_project_roleOmit
    hl_project?: hl_projectOmit
    project_pipeline_stage?: project_pipeline_stageOmit
    hl_user_task?: hl_user_taskOmit
    hl_task?: hl_taskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model hl_user
   */

  export type AggregateHl_user = {
    _count: Hl_userCountAggregateOutputType | null
    _avg: Hl_userAvgAggregateOutputType | null
    _sum: Hl_userSumAggregateOutputType | null
    _min: Hl_userMinAggregateOutputType | null
    _max: Hl_userMaxAggregateOutputType | null
  }

  export type Hl_userAvgAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
  }

  export type Hl_userSumAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
  }

  export type Hl_userMinAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    name: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_userMaxAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    name: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_userCountAggregateOutputType = {
    id: number
    platform_user_id: number
    name: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hl_userAvgAggregateInputType = {
    id?: true
    platform_user_id?: true
  }

  export type Hl_userSumAggregateInputType = {
    id?: true
    platform_user_id?: true
  }

  export type Hl_userMinAggregateInputType = {
    id?: true
    platform_user_id?: true
    name?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_userMaxAggregateInputType = {
    id?: true
    platform_user_id?: true
    name?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_userCountAggregateInputType = {
    id?: true
    platform_user_id?: true
    name?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hl_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_user to aggregate.
     */
    where?: hl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_users to fetch.
     */
    orderBy?: hl_userOrderByWithRelationInput | hl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hl_users
    **/
    _count?: true | Hl_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hl_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hl_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hl_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hl_userMaxAggregateInputType
  }

  export type GetHl_userAggregateType<T extends Hl_userAggregateArgs> = {
        [P in keyof T & keyof AggregateHl_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHl_user[P]>
      : GetScalarType<T[P], AggregateHl_user[P]>
  }




  export type hl_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hl_userWhereInput
    orderBy?: hl_userOrderByWithAggregationInput | hl_userOrderByWithAggregationInput[]
    by: Hl_userScalarFieldEnum[] | Hl_userScalarFieldEnum
    having?: hl_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hl_userCountAggregateInputType | true
    _avg?: Hl_userAvgAggregateInputType
    _sum?: Hl_userSumAggregateInputType
    _min?: Hl_userMinAggregateInputType
    _max?: Hl_userMaxAggregateInputType
  }

  export type Hl_userGroupByOutputType = {
    id: number
    platform_user_id: number
    name: string
    email: string
    created_at: Date
    updated_at: Date
    _count: Hl_userCountAggregateOutputType | null
    _avg: Hl_userAvgAggregateOutputType | null
    _sum: Hl_userSumAggregateOutputType | null
    _min: Hl_userMinAggregateOutputType | null
    _max: Hl_userMaxAggregateOutputType | null
  }

  type GetHl_userGroupByPayload<T extends hl_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hl_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hl_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hl_userGroupByOutputType[P]>
            : GetScalarType<T[P], Hl_userGroupByOutputType[P]>
        }
      >
    >


  export type hl_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_user"]>

  export type hl_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_user"]>

  export type hl_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_user"]>

  export type hl_userSelectScalar = {
    id?: boolean
    platform_user_id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type hl_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform_user_id" | "name" | "email" | "created_at" | "updated_at", ExtArgs["result"]["hl_user"]>

  export type $hl_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hl_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform_user_id: number
      name: string
      email: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["hl_user"]>
    composites: {}
  }

  type hl_userGetPayload<S extends boolean | null | undefined | hl_userDefaultArgs> = $Result.GetResult<Prisma.$hl_userPayload, S>

  type hl_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hl_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hl_userCountAggregateInputType | true
    }

  export interface hl_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hl_user'], meta: { name: 'hl_user' } }
    /**
     * Find zero or one Hl_user that matches the filter.
     * @param {hl_userFindUniqueArgs} args - Arguments to find a Hl_user
     * @example
     * // Get one Hl_user
     * const hl_user = await prisma.hl_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hl_userFindUniqueArgs>(args: SelectSubset<T, hl_userFindUniqueArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hl_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hl_userFindUniqueOrThrowArgs} args - Arguments to find a Hl_user
     * @example
     * // Get one Hl_user
     * const hl_user = await prisma.hl_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hl_userFindUniqueOrThrowArgs>(args: SelectSubset<T, hl_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_userFindFirstArgs} args - Arguments to find a Hl_user
     * @example
     * // Get one Hl_user
     * const hl_user = await prisma.hl_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hl_userFindFirstArgs>(args?: SelectSubset<T, hl_userFindFirstArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_userFindFirstOrThrowArgs} args - Arguments to find a Hl_user
     * @example
     * // Get one Hl_user
     * const hl_user = await prisma.hl_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hl_userFindFirstOrThrowArgs>(args?: SelectSubset<T, hl_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hl_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hl_users
     * const hl_users = await prisma.hl_user.findMany()
     * 
     * // Get first 10 Hl_users
     * const hl_users = await prisma.hl_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hl_userWithIdOnly = await prisma.hl_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hl_userFindManyArgs>(args?: SelectSubset<T, hl_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hl_user.
     * @param {hl_userCreateArgs} args - Arguments to create a Hl_user.
     * @example
     * // Create one Hl_user
     * const Hl_user = await prisma.hl_user.create({
     *   data: {
     *     // ... data to create a Hl_user
     *   }
     * })
     * 
     */
    create<T extends hl_userCreateArgs>(args: SelectSubset<T, hl_userCreateArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hl_users.
     * @param {hl_userCreateManyArgs} args - Arguments to create many Hl_users.
     * @example
     * // Create many Hl_users
     * const hl_user = await prisma.hl_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hl_userCreateManyArgs>(args?: SelectSubset<T, hl_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hl_users and returns the data saved in the database.
     * @param {hl_userCreateManyAndReturnArgs} args - Arguments to create many Hl_users.
     * @example
     * // Create many Hl_users
     * const hl_user = await prisma.hl_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hl_users and only return the `id`
     * const hl_userWithIdOnly = await prisma.hl_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hl_userCreateManyAndReturnArgs>(args?: SelectSubset<T, hl_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hl_user.
     * @param {hl_userDeleteArgs} args - Arguments to delete one Hl_user.
     * @example
     * // Delete one Hl_user
     * const Hl_user = await prisma.hl_user.delete({
     *   where: {
     *     // ... filter to delete one Hl_user
     *   }
     * })
     * 
     */
    delete<T extends hl_userDeleteArgs>(args: SelectSubset<T, hl_userDeleteArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hl_user.
     * @param {hl_userUpdateArgs} args - Arguments to update one Hl_user.
     * @example
     * // Update one Hl_user
     * const hl_user = await prisma.hl_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hl_userUpdateArgs>(args: SelectSubset<T, hl_userUpdateArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hl_users.
     * @param {hl_userDeleteManyArgs} args - Arguments to filter Hl_users to delete.
     * @example
     * // Delete a few Hl_users
     * const { count } = await prisma.hl_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hl_userDeleteManyArgs>(args?: SelectSubset<T, hl_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hl_users
     * const hl_user = await prisma.hl_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hl_userUpdateManyArgs>(args: SelectSubset<T, hl_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_users and returns the data updated in the database.
     * @param {hl_userUpdateManyAndReturnArgs} args - Arguments to update many Hl_users.
     * @example
     * // Update many Hl_users
     * const hl_user = await prisma.hl_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hl_users and only return the `id`
     * const hl_userWithIdOnly = await prisma.hl_user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hl_userUpdateManyAndReturnArgs>(args: SelectSubset<T, hl_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hl_user.
     * @param {hl_userUpsertArgs} args - Arguments to update or create a Hl_user.
     * @example
     * // Update or create a Hl_user
     * const hl_user = await prisma.hl_user.upsert({
     *   create: {
     *     // ... data to create a Hl_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hl_user we want to update
     *   }
     * })
     */
    upsert<T extends hl_userUpsertArgs>(args: SelectSubset<T, hl_userUpsertArgs<ExtArgs>>): Prisma__hl_userClient<$Result.GetResult<Prisma.$hl_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_userCountArgs} args - Arguments to filter Hl_users to count.
     * @example
     * // Count the number of Hl_users
     * const count = await prisma.hl_user.count({
     *   where: {
     *     // ... the filter for the Hl_users we want to count
     *   }
     * })
    **/
    count<T extends hl_userCountArgs>(
      args?: Subset<T, hl_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hl_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hl_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hl_userAggregateArgs>(args: Subset<T, Hl_userAggregateArgs>): Prisma.PrismaPromise<GetHl_userAggregateType<T>>

    /**
     * Group by Hl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hl_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hl_userGroupByArgs['orderBy'] }
        : { orderBy?: hl_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hl_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHl_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hl_user model
   */
  readonly fields: hl_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hl_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hl_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hl_user model
   */
  interface hl_userFieldRefs {
    readonly id: FieldRef<"hl_user", 'Int'>
    readonly platform_user_id: FieldRef<"hl_user", 'Int'>
    readonly name: FieldRef<"hl_user", 'String'>
    readonly email: FieldRef<"hl_user", 'String'>
    readonly created_at: FieldRef<"hl_user", 'DateTime'>
    readonly updated_at: FieldRef<"hl_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hl_user findUnique
   */
  export type hl_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * Filter, which hl_user to fetch.
     */
    where: hl_userWhereUniqueInput
  }

  /**
   * hl_user findUniqueOrThrow
   */
  export type hl_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * Filter, which hl_user to fetch.
     */
    where: hl_userWhereUniqueInput
  }

  /**
   * hl_user findFirst
   */
  export type hl_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * Filter, which hl_user to fetch.
     */
    where?: hl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_users to fetch.
     */
    orderBy?: hl_userOrderByWithRelationInput | hl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_users.
     */
    cursor?: hl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_users.
     */
    distinct?: Hl_userScalarFieldEnum | Hl_userScalarFieldEnum[]
  }

  /**
   * hl_user findFirstOrThrow
   */
  export type hl_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * Filter, which hl_user to fetch.
     */
    where?: hl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_users to fetch.
     */
    orderBy?: hl_userOrderByWithRelationInput | hl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_users.
     */
    cursor?: hl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_users.
     */
    distinct?: Hl_userScalarFieldEnum | Hl_userScalarFieldEnum[]
  }

  /**
   * hl_user findMany
   */
  export type hl_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * Filter, which hl_users to fetch.
     */
    where?: hl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_users to fetch.
     */
    orderBy?: hl_userOrderByWithRelationInput | hl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hl_users.
     */
    cursor?: hl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_users.
     */
    skip?: number
    distinct?: Hl_userScalarFieldEnum | Hl_userScalarFieldEnum[]
  }

  /**
   * hl_user create
   */
  export type hl_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * The data needed to create a hl_user.
     */
    data: XOR<hl_userCreateInput, hl_userUncheckedCreateInput>
  }

  /**
   * hl_user createMany
   */
  export type hl_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hl_users.
     */
    data: hl_userCreateManyInput | hl_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_user createManyAndReturn
   */
  export type hl_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * The data used to create many hl_users.
     */
    data: hl_userCreateManyInput | hl_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_user update
   */
  export type hl_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * The data needed to update a hl_user.
     */
    data: XOR<hl_userUpdateInput, hl_userUncheckedUpdateInput>
    /**
     * Choose, which hl_user to update.
     */
    where: hl_userWhereUniqueInput
  }

  /**
   * hl_user updateMany
   */
  export type hl_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hl_users.
     */
    data: XOR<hl_userUpdateManyMutationInput, hl_userUncheckedUpdateManyInput>
    /**
     * Filter which hl_users to update
     */
    where?: hl_userWhereInput
    /**
     * Limit how many hl_users to update.
     */
    limit?: number
  }

  /**
   * hl_user updateManyAndReturn
   */
  export type hl_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * The data used to update hl_users.
     */
    data: XOR<hl_userUpdateManyMutationInput, hl_userUncheckedUpdateManyInput>
    /**
     * Filter which hl_users to update
     */
    where?: hl_userWhereInput
    /**
     * Limit how many hl_users to update.
     */
    limit?: number
  }

  /**
   * hl_user upsert
   */
  export type hl_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * The filter to search for the hl_user to update in case it exists.
     */
    where: hl_userWhereUniqueInput
    /**
     * In case the hl_user found by the `where` argument doesn't exist, create a new hl_user with this data.
     */
    create: XOR<hl_userCreateInput, hl_userUncheckedCreateInput>
    /**
     * In case the hl_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hl_userUpdateInput, hl_userUncheckedUpdateInput>
  }

  /**
   * hl_user delete
   */
  export type hl_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
    /**
     * Filter which hl_user to delete.
     */
    where: hl_userWhereUniqueInput
  }

  /**
   * hl_user deleteMany
   */
  export type hl_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_users to delete
     */
    where?: hl_userWhereInput
    /**
     * Limit how many hl_users to delete.
     */
    limit?: number
  }

  /**
   * hl_user without action
   */
  export type hl_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user
     */
    select?: hl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user
     */
    omit?: hl_userOmit<ExtArgs> | null
  }


  /**
   * Model hl_user_project_role
   */

  export type AggregateHl_user_project_role = {
    _count: Hl_user_project_roleCountAggregateOutputType | null
    _avg: Hl_user_project_roleAvgAggregateOutputType | null
    _sum: Hl_user_project_roleSumAggregateOutputType | null
    _min: Hl_user_project_roleMinAggregateOutputType | null
    _max: Hl_user_project_roleMaxAggregateOutputType | null
  }

  export type Hl_user_project_roleAvgAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    project_id: number | null
  }

  export type Hl_user_project_roleSumAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    project_id: number | null
  }

  export type Hl_user_project_roleMinAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    project_id: number | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_user_project_roleMaxAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    project_id: number | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_user_project_roleCountAggregateOutputType = {
    id: number
    platform_user_id: number
    project_id: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hl_user_project_roleAvgAggregateInputType = {
    id?: true
    platform_user_id?: true
    project_id?: true
  }

  export type Hl_user_project_roleSumAggregateInputType = {
    id?: true
    platform_user_id?: true
    project_id?: true
  }

  export type Hl_user_project_roleMinAggregateInputType = {
    id?: true
    platform_user_id?: true
    project_id?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_user_project_roleMaxAggregateInputType = {
    id?: true
    platform_user_id?: true
    project_id?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_user_project_roleCountAggregateInputType = {
    id?: true
    platform_user_id?: true
    project_id?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hl_user_project_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_user_project_role to aggregate.
     */
    where?: hl_user_project_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_project_roles to fetch.
     */
    orderBy?: hl_user_project_roleOrderByWithRelationInput | hl_user_project_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hl_user_project_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_project_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_project_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hl_user_project_roles
    **/
    _count?: true | Hl_user_project_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hl_user_project_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hl_user_project_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hl_user_project_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hl_user_project_roleMaxAggregateInputType
  }

  export type GetHl_user_project_roleAggregateType<T extends Hl_user_project_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateHl_user_project_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHl_user_project_role[P]>
      : GetScalarType<T[P], AggregateHl_user_project_role[P]>
  }




  export type hl_user_project_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hl_user_project_roleWhereInput
    orderBy?: hl_user_project_roleOrderByWithAggregationInput | hl_user_project_roleOrderByWithAggregationInput[]
    by: Hl_user_project_roleScalarFieldEnum[] | Hl_user_project_roleScalarFieldEnum
    having?: hl_user_project_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hl_user_project_roleCountAggregateInputType | true
    _avg?: Hl_user_project_roleAvgAggregateInputType
    _sum?: Hl_user_project_roleSumAggregateInputType
    _min?: Hl_user_project_roleMinAggregateInputType
    _max?: Hl_user_project_roleMaxAggregateInputType
  }

  export type Hl_user_project_roleGroupByOutputType = {
    id: number
    platform_user_id: number
    project_id: number
    role: string
    created_at: Date
    updated_at: Date
    _count: Hl_user_project_roleCountAggregateOutputType | null
    _avg: Hl_user_project_roleAvgAggregateOutputType | null
    _sum: Hl_user_project_roleSumAggregateOutputType | null
    _min: Hl_user_project_roleMinAggregateOutputType | null
    _max: Hl_user_project_roleMaxAggregateOutputType | null
  }

  type GetHl_user_project_roleGroupByPayload<T extends hl_user_project_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hl_user_project_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hl_user_project_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hl_user_project_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Hl_user_project_roleGroupByOutputType[P]>
        }
      >
    >


  export type hl_user_project_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    project_id?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_user_project_role"]>

  export type hl_user_project_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    project_id?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_user_project_role"]>

  export type hl_user_project_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    project_id?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_user_project_role"]>

  export type hl_user_project_roleSelectScalar = {
    id?: boolean
    platform_user_id?: boolean
    project_id?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type hl_user_project_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform_user_id" | "project_id" | "role" | "created_at" | "updated_at", ExtArgs["result"]["hl_user_project_role"]>

  export type $hl_user_project_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hl_user_project_role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform_user_id: number
      project_id: number
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["hl_user_project_role"]>
    composites: {}
  }

  type hl_user_project_roleGetPayload<S extends boolean | null | undefined | hl_user_project_roleDefaultArgs> = $Result.GetResult<Prisma.$hl_user_project_rolePayload, S>

  type hl_user_project_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hl_user_project_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hl_user_project_roleCountAggregateInputType | true
    }

  export interface hl_user_project_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hl_user_project_role'], meta: { name: 'hl_user_project_role' } }
    /**
     * Find zero or one Hl_user_project_role that matches the filter.
     * @param {hl_user_project_roleFindUniqueArgs} args - Arguments to find a Hl_user_project_role
     * @example
     * // Get one Hl_user_project_role
     * const hl_user_project_role = await prisma.hl_user_project_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hl_user_project_roleFindUniqueArgs>(args: SelectSubset<T, hl_user_project_roleFindUniqueArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hl_user_project_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hl_user_project_roleFindUniqueOrThrowArgs} args - Arguments to find a Hl_user_project_role
     * @example
     * // Get one Hl_user_project_role
     * const hl_user_project_role = await prisma.hl_user_project_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hl_user_project_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, hl_user_project_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_user_project_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_project_roleFindFirstArgs} args - Arguments to find a Hl_user_project_role
     * @example
     * // Get one Hl_user_project_role
     * const hl_user_project_role = await prisma.hl_user_project_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hl_user_project_roleFindFirstArgs>(args?: SelectSubset<T, hl_user_project_roleFindFirstArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_user_project_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_project_roleFindFirstOrThrowArgs} args - Arguments to find a Hl_user_project_role
     * @example
     * // Get one Hl_user_project_role
     * const hl_user_project_role = await prisma.hl_user_project_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hl_user_project_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, hl_user_project_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hl_user_project_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_project_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hl_user_project_roles
     * const hl_user_project_roles = await prisma.hl_user_project_role.findMany()
     * 
     * // Get first 10 Hl_user_project_roles
     * const hl_user_project_roles = await prisma.hl_user_project_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hl_user_project_roleWithIdOnly = await prisma.hl_user_project_role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hl_user_project_roleFindManyArgs>(args?: SelectSubset<T, hl_user_project_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hl_user_project_role.
     * @param {hl_user_project_roleCreateArgs} args - Arguments to create a Hl_user_project_role.
     * @example
     * // Create one Hl_user_project_role
     * const Hl_user_project_role = await prisma.hl_user_project_role.create({
     *   data: {
     *     // ... data to create a Hl_user_project_role
     *   }
     * })
     * 
     */
    create<T extends hl_user_project_roleCreateArgs>(args: SelectSubset<T, hl_user_project_roleCreateArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hl_user_project_roles.
     * @param {hl_user_project_roleCreateManyArgs} args - Arguments to create many Hl_user_project_roles.
     * @example
     * // Create many Hl_user_project_roles
     * const hl_user_project_role = await prisma.hl_user_project_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hl_user_project_roleCreateManyArgs>(args?: SelectSubset<T, hl_user_project_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hl_user_project_roles and returns the data saved in the database.
     * @param {hl_user_project_roleCreateManyAndReturnArgs} args - Arguments to create many Hl_user_project_roles.
     * @example
     * // Create many Hl_user_project_roles
     * const hl_user_project_role = await prisma.hl_user_project_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hl_user_project_roles and only return the `id`
     * const hl_user_project_roleWithIdOnly = await prisma.hl_user_project_role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hl_user_project_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, hl_user_project_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hl_user_project_role.
     * @param {hl_user_project_roleDeleteArgs} args - Arguments to delete one Hl_user_project_role.
     * @example
     * // Delete one Hl_user_project_role
     * const Hl_user_project_role = await prisma.hl_user_project_role.delete({
     *   where: {
     *     // ... filter to delete one Hl_user_project_role
     *   }
     * })
     * 
     */
    delete<T extends hl_user_project_roleDeleteArgs>(args: SelectSubset<T, hl_user_project_roleDeleteArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hl_user_project_role.
     * @param {hl_user_project_roleUpdateArgs} args - Arguments to update one Hl_user_project_role.
     * @example
     * // Update one Hl_user_project_role
     * const hl_user_project_role = await prisma.hl_user_project_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hl_user_project_roleUpdateArgs>(args: SelectSubset<T, hl_user_project_roleUpdateArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hl_user_project_roles.
     * @param {hl_user_project_roleDeleteManyArgs} args - Arguments to filter Hl_user_project_roles to delete.
     * @example
     * // Delete a few Hl_user_project_roles
     * const { count } = await prisma.hl_user_project_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hl_user_project_roleDeleteManyArgs>(args?: SelectSubset<T, hl_user_project_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_user_project_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_project_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hl_user_project_roles
     * const hl_user_project_role = await prisma.hl_user_project_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hl_user_project_roleUpdateManyArgs>(args: SelectSubset<T, hl_user_project_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_user_project_roles and returns the data updated in the database.
     * @param {hl_user_project_roleUpdateManyAndReturnArgs} args - Arguments to update many Hl_user_project_roles.
     * @example
     * // Update many Hl_user_project_roles
     * const hl_user_project_role = await prisma.hl_user_project_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hl_user_project_roles and only return the `id`
     * const hl_user_project_roleWithIdOnly = await prisma.hl_user_project_role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hl_user_project_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, hl_user_project_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hl_user_project_role.
     * @param {hl_user_project_roleUpsertArgs} args - Arguments to update or create a Hl_user_project_role.
     * @example
     * // Update or create a Hl_user_project_role
     * const hl_user_project_role = await prisma.hl_user_project_role.upsert({
     *   create: {
     *     // ... data to create a Hl_user_project_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hl_user_project_role we want to update
     *   }
     * })
     */
    upsert<T extends hl_user_project_roleUpsertArgs>(args: SelectSubset<T, hl_user_project_roleUpsertArgs<ExtArgs>>): Prisma__hl_user_project_roleClient<$Result.GetResult<Prisma.$hl_user_project_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hl_user_project_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_project_roleCountArgs} args - Arguments to filter Hl_user_project_roles to count.
     * @example
     * // Count the number of Hl_user_project_roles
     * const count = await prisma.hl_user_project_role.count({
     *   where: {
     *     // ... the filter for the Hl_user_project_roles we want to count
     *   }
     * })
    **/
    count<T extends hl_user_project_roleCountArgs>(
      args?: Subset<T, hl_user_project_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hl_user_project_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hl_user_project_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hl_user_project_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hl_user_project_roleAggregateArgs>(args: Subset<T, Hl_user_project_roleAggregateArgs>): Prisma.PrismaPromise<GetHl_user_project_roleAggregateType<T>>

    /**
     * Group by Hl_user_project_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_project_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hl_user_project_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hl_user_project_roleGroupByArgs['orderBy'] }
        : { orderBy?: hl_user_project_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hl_user_project_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHl_user_project_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hl_user_project_role model
   */
  readonly fields: hl_user_project_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hl_user_project_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hl_user_project_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hl_user_project_role model
   */
  interface hl_user_project_roleFieldRefs {
    readonly id: FieldRef<"hl_user_project_role", 'Int'>
    readonly platform_user_id: FieldRef<"hl_user_project_role", 'Int'>
    readonly project_id: FieldRef<"hl_user_project_role", 'Int'>
    readonly role: FieldRef<"hl_user_project_role", 'String'>
    readonly created_at: FieldRef<"hl_user_project_role", 'DateTime'>
    readonly updated_at: FieldRef<"hl_user_project_role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hl_user_project_role findUnique
   */
  export type hl_user_project_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_project_role to fetch.
     */
    where: hl_user_project_roleWhereUniqueInput
  }

  /**
   * hl_user_project_role findUniqueOrThrow
   */
  export type hl_user_project_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_project_role to fetch.
     */
    where: hl_user_project_roleWhereUniqueInput
  }

  /**
   * hl_user_project_role findFirst
   */
  export type hl_user_project_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_project_role to fetch.
     */
    where?: hl_user_project_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_project_roles to fetch.
     */
    orderBy?: hl_user_project_roleOrderByWithRelationInput | hl_user_project_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_user_project_roles.
     */
    cursor?: hl_user_project_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_project_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_project_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_user_project_roles.
     */
    distinct?: Hl_user_project_roleScalarFieldEnum | Hl_user_project_roleScalarFieldEnum[]
  }

  /**
   * hl_user_project_role findFirstOrThrow
   */
  export type hl_user_project_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_project_role to fetch.
     */
    where?: hl_user_project_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_project_roles to fetch.
     */
    orderBy?: hl_user_project_roleOrderByWithRelationInput | hl_user_project_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_user_project_roles.
     */
    cursor?: hl_user_project_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_project_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_project_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_user_project_roles.
     */
    distinct?: Hl_user_project_roleScalarFieldEnum | Hl_user_project_roleScalarFieldEnum[]
  }

  /**
   * hl_user_project_role findMany
   */
  export type hl_user_project_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_project_roles to fetch.
     */
    where?: hl_user_project_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_project_roles to fetch.
     */
    orderBy?: hl_user_project_roleOrderByWithRelationInput | hl_user_project_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hl_user_project_roles.
     */
    cursor?: hl_user_project_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_project_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_project_roles.
     */
    skip?: number
    distinct?: Hl_user_project_roleScalarFieldEnum | Hl_user_project_roleScalarFieldEnum[]
  }

  /**
   * hl_user_project_role create
   */
  export type hl_user_project_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * The data needed to create a hl_user_project_role.
     */
    data: XOR<hl_user_project_roleCreateInput, hl_user_project_roleUncheckedCreateInput>
  }

  /**
   * hl_user_project_role createMany
   */
  export type hl_user_project_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hl_user_project_roles.
     */
    data: hl_user_project_roleCreateManyInput | hl_user_project_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_user_project_role createManyAndReturn
   */
  export type hl_user_project_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * The data used to create many hl_user_project_roles.
     */
    data: hl_user_project_roleCreateManyInput | hl_user_project_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_user_project_role update
   */
  export type hl_user_project_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * The data needed to update a hl_user_project_role.
     */
    data: XOR<hl_user_project_roleUpdateInput, hl_user_project_roleUncheckedUpdateInput>
    /**
     * Choose, which hl_user_project_role to update.
     */
    where: hl_user_project_roleWhereUniqueInput
  }

  /**
   * hl_user_project_role updateMany
   */
  export type hl_user_project_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hl_user_project_roles.
     */
    data: XOR<hl_user_project_roleUpdateManyMutationInput, hl_user_project_roleUncheckedUpdateManyInput>
    /**
     * Filter which hl_user_project_roles to update
     */
    where?: hl_user_project_roleWhereInput
    /**
     * Limit how many hl_user_project_roles to update.
     */
    limit?: number
  }

  /**
   * hl_user_project_role updateManyAndReturn
   */
  export type hl_user_project_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * The data used to update hl_user_project_roles.
     */
    data: XOR<hl_user_project_roleUpdateManyMutationInput, hl_user_project_roleUncheckedUpdateManyInput>
    /**
     * Filter which hl_user_project_roles to update
     */
    where?: hl_user_project_roleWhereInput
    /**
     * Limit how many hl_user_project_roles to update.
     */
    limit?: number
  }

  /**
   * hl_user_project_role upsert
   */
  export type hl_user_project_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * The filter to search for the hl_user_project_role to update in case it exists.
     */
    where: hl_user_project_roleWhereUniqueInput
    /**
     * In case the hl_user_project_role found by the `where` argument doesn't exist, create a new hl_user_project_role with this data.
     */
    create: XOR<hl_user_project_roleCreateInput, hl_user_project_roleUncheckedCreateInput>
    /**
     * In case the hl_user_project_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hl_user_project_roleUpdateInput, hl_user_project_roleUncheckedUpdateInput>
  }

  /**
   * hl_user_project_role delete
   */
  export type hl_user_project_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
    /**
     * Filter which hl_user_project_role to delete.
     */
    where: hl_user_project_roleWhereUniqueInput
  }

  /**
   * hl_user_project_role deleteMany
   */
  export type hl_user_project_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_user_project_roles to delete
     */
    where?: hl_user_project_roleWhereInput
    /**
     * Limit how many hl_user_project_roles to delete.
     */
    limit?: number
  }

  /**
   * hl_user_project_role without action
   */
  export type hl_user_project_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_project_role
     */
    select?: hl_user_project_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_project_role
     */
    omit?: hl_user_project_roleOmit<ExtArgs> | null
  }


  /**
   * Model hl_project
   */

  export type AggregateHl_project = {
    _count: Hl_projectCountAggregateOutputType | null
    _avg: Hl_projectAvgAggregateOutputType | null
    _sum: Hl_projectSumAggregateOutputType | null
    _min: Hl_projectMinAggregateOutputType | null
    _max: Hl_projectMaxAggregateOutputType | null
  }

  export type Hl_projectAvgAggregateOutputType = {
    id: number | null
    annotator_project_id: number | null
  }

  export type Hl_projectSumAggregateOutputType = {
    id: number | null
    annotator_project_id: number | null
  }

  export type Hl_projectMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    annotator_project_id: number | null
    stage_order: string | null
    current_stage: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_projectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    annotator_project_id: number | null
    stage_order: string | null
    current_stage: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_projectCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    annotator_project_id: number
    stage_order: number
    current_stage: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hl_projectAvgAggregateInputType = {
    id?: true
    annotator_project_id?: true
  }

  export type Hl_projectSumAggregateInputType = {
    id?: true
    annotator_project_id?: true
  }

  export type Hl_projectMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    annotator_project_id?: true
    stage_order?: true
    current_stage?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_projectMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    annotator_project_id?: true
    stage_order?: true
    current_stage?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_projectCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    annotator_project_id?: true
    stage_order?: true
    current_stage?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hl_projectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_project to aggregate.
     */
    where?: hl_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_projects to fetch.
     */
    orderBy?: hl_projectOrderByWithRelationInput | hl_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hl_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hl_projects
    **/
    _count?: true | Hl_projectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hl_projectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hl_projectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hl_projectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hl_projectMaxAggregateInputType
  }

  export type GetHl_projectAggregateType<T extends Hl_projectAggregateArgs> = {
        [P in keyof T & keyof AggregateHl_project]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHl_project[P]>
      : GetScalarType<T[P], AggregateHl_project[P]>
  }




  export type hl_projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hl_projectWhereInput
    orderBy?: hl_projectOrderByWithAggregationInput | hl_projectOrderByWithAggregationInput[]
    by: Hl_projectScalarFieldEnum[] | Hl_projectScalarFieldEnum
    having?: hl_projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hl_projectCountAggregateInputType | true
    _avg?: Hl_projectAvgAggregateInputType
    _sum?: Hl_projectSumAggregateInputType
    _min?: Hl_projectMinAggregateInputType
    _max?: Hl_projectMaxAggregateInputType
  }

  export type Hl_projectGroupByOutputType = {
    id: number
    name: string
    desc: string
    annotator_project_id: number
    stage_order: string
    current_stage: string
    created_at: Date
    updated_at: Date
    _count: Hl_projectCountAggregateOutputType | null
    _avg: Hl_projectAvgAggregateOutputType | null
    _sum: Hl_projectSumAggregateOutputType | null
    _min: Hl_projectMinAggregateOutputType | null
    _max: Hl_projectMaxAggregateOutputType | null
  }

  type GetHl_projectGroupByPayload<T extends hl_projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hl_projectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hl_projectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hl_projectGroupByOutputType[P]>
            : GetScalarType<T[P], Hl_projectGroupByOutputType[P]>
        }
      >
    >


  export type hl_projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    annotator_project_id?: boolean
    stage_order?: boolean
    current_stage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_project"]>

  export type hl_projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    annotator_project_id?: boolean
    stage_order?: boolean
    current_stage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_project"]>

  export type hl_projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    annotator_project_id?: boolean
    stage_order?: boolean
    current_stage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_project"]>

  export type hl_projectSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    annotator_project_id?: boolean
    stage_order?: boolean
    current_stage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type hl_projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "annotator_project_id" | "stage_order" | "current_stage" | "created_at" | "updated_at", ExtArgs["result"]["hl_project"]>

  export type $hl_projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hl_project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string
      annotator_project_id: number
      stage_order: string
      current_stage: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["hl_project"]>
    composites: {}
  }

  type hl_projectGetPayload<S extends boolean | null | undefined | hl_projectDefaultArgs> = $Result.GetResult<Prisma.$hl_projectPayload, S>

  type hl_projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hl_projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hl_projectCountAggregateInputType | true
    }

  export interface hl_projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hl_project'], meta: { name: 'hl_project' } }
    /**
     * Find zero or one Hl_project that matches the filter.
     * @param {hl_projectFindUniqueArgs} args - Arguments to find a Hl_project
     * @example
     * // Get one Hl_project
     * const hl_project = await prisma.hl_project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hl_projectFindUniqueArgs>(args: SelectSubset<T, hl_projectFindUniqueArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hl_project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hl_projectFindUniqueOrThrowArgs} args - Arguments to find a Hl_project
     * @example
     * // Get one Hl_project
     * const hl_project = await prisma.hl_project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hl_projectFindUniqueOrThrowArgs>(args: SelectSubset<T, hl_projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_projectFindFirstArgs} args - Arguments to find a Hl_project
     * @example
     * // Get one Hl_project
     * const hl_project = await prisma.hl_project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hl_projectFindFirstArgs>(args?: SelectSubset<T, hl_projectFindFirstArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_projectFindFirstOrThrowArgs} args - Arguments to find a Hl_project
     * @example
     * // Get one Hl_project
     * const hl_project = await prisma.hl_project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hl_projectFindFirstOrThrowArgs>(args?: SelectSubset<T, hl_projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hl_projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hl_projects
     * const hl_projects = await prisma.hl_project.findMany()
     * 
     * // Get first 10 Hl_projects
     * const hl_projects = await prisma.hl_project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hl_projectWithIdOnly = await prisma.hl_project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hl_projectFindManyArgs>(args?: SelectSubset<T, hl_projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hl_project.
     * @param {hl_projectCreateArgs} args - Arguments to create a Hl_project.
     * @example
     * // Create one Hl_project
     * const Hl_project = await prisma.hl_project.create({
     *   data: {
     *     // ... data to create a Hl_project
     *   }
     * })
     * 
     */
    create<T extends hl_projectCreateArgs>(args: SelectSubset<T, hl_projectCreateArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hl_projects.
     * @param {hl_projectCreateManyArgs} args - Arguments to create many Hl_projects.
     * @example
     * // Create many Hl_projects
     * const hl_project = await prisma.hl_project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hl_projectCreateManyArgs>(args?: SelectSubset<T, hl_projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hl_projects and returns the data saved in the database.
     * @param {hl_projectCreateManyAndReturnArgs} args - Arguments to create many Hl_projects.
     * @example
     * // Create many Hl_projects
     * const hl_project = await prisma.hl_project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hl_projects and only return the `id`
     * const hl_projectWithIdOnly = await prisma.hl_project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hl_projectCreateManyAndReturnArgs>(args?: SelectSubset<T, hl_projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hl_project.
     * @param {hl_projectDeleteArgs} args - Arguments to delete one Hl_project.
     * @example
     * // Delete one Hl_project
     * const Hl_project = await prisma.hl_project.delete({
     *   where: {
     *     // ... filter to delete one Hl_project
     *   }
     * })
     * 
     */
    delete<T extends hl_projectDeleteArgs>(args: SelectSubset<T, hl_projectDeleteArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hl_project.
     * @param {hl_projectUpdateArgs} args - Arguments to update one Hl_project.
     * @example
     * // Update one Hl_project
     * const hl_project = await prisma.hl_project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hl_projectUpdateArgs>(args: SelectSubset<T, hl_projectUpdateArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hl_projects.
     * @param {hl_projectDeleteManyArgs} args - Arguments to filter Hl_projects to delete.
     * @example
     * // Delete a few Hl_projects
     * const { count } = await prisma.hl_project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hl_projectDeleteManyArgs>(args?: SelectSubset<T, hl_projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hl_projects
     * const hl_project = await prisma.hl_project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hl_projectUpdateManyArgs>(args: SelectSubset<T, hl_projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_projects and returns the data updated in the database.
     * @param {hl_projectUpdateManyAndReturnArgs} args - Arguments to update many Hl_projects.
     * @example
     * // Update many Hl_projects
     * const hl_project = await prisma.hl_project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hl_projects and only return the `id`
     * const hl_projectWithIdOnly = await prisma.hl_project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hl_projectUpdateManyAndReturnArgs>(args: SelectSubset<T, hl_projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hl_project.
     * @param {hl_projectUpsertArgs} args - Arguments to update or create a Hl_project.
     * @example
     * // Update or create a Hl_project
     * const hl_project = await prisma.hl_project.upsert({
     *   create: {
     *     // ... data to create a Hl_project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hl_project we want to update
     *   }
     * })
     */
    upsert<T extends hl_projectUpsertArgs>(args: SelectSubset<T, hl_projectUpsertArgs<ExtArgs>>): Prisma__hl_projectClient<$Result.GetResult<Prisma.$hl_projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hl_projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_projectCountArgs} args - Arguments to filter Hl_projects to count.
     * @example
     * // Count the number of Hl_projects
     * const count = await prisma.hl_project.count({
     *   where: {
     *     // ... the filter for the Hl_projects we want to count
     *   }
     * })
    **/
    count<T extends hl_projectCountArgs>(
      args?: Subset<T, hl_projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hl_projectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hl_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hl_projectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hl_projectAggregateArgs>(args: Subset<T, Hl_projectAggregateArgs>): Prisma.PrismaPromise<GetHl_projectAggregateType<T>>

    /**
     * Group by Hl_project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hl_projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hl_projectGroupByArgs['orderBy'] }
        : { orderBy?: hl_projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hl_projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHl_projectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hl_project model
   */
  readonly fields: hl_projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hl_project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hl_projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hl_project model
   */
  interface hl_projectFieldRefs {
    readonly id: FieldRef<"hl_project", 'Int'>
    readonly name: FieldRef<"hl_project", 'String'>
    readonly desc: FieldRef<"hl_project", 'String'>
    readonly annotator_project_id: FieldRef<"hl_project", 'Int'>
    readonly stage_order: FieldRef<"hl_project", 'String'>
    readonly current_stage: FieldRef<"hl_project", 'String'>
    readonly created_at: FieldRef<"hl_project", 'DateTime'>
    readonly updated_at: FieldRef<"hl_project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hl_project findUnique
   */
  export type hl_projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * Filter, which hl_project to fetch.
     */
    where: hl_projectWhereUniqueInput
  }

  /**
   * hl_project findUniqueOrThrow
   */
  export type hl_projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * Filter, which hl_project to fetch.
     */
    where: hl_projectWhereUniqueInput
  }

  /**
   * hl_project findFirst
   */
  export type hl_projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * Filter, which hl_project to fetch.
     */
    where?: hl_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_projects to fetch.
     */
    orderBy?: hl_projectOrderByWithRelationInput | hl_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_projects.
     */
    cursor?: hl_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_projects.
     */
    distinct?: Hl_projectScalarFieldEnum | Hl_projectScalarFieldEnum[]
  }

  /**
   * hl_project findFirstOrThrow
   */
  export type hl_projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * Filter, which hl_project to fetch.
     */
    where?: hl_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_projects to fetch.
     */
    orderBy?: hl_projectOrderByWithRelationInput | hl_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_projects.
     */
    cursor?: hl_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_projects.
     */
    distinct?: Hl_projectScalarFieldEnum | Hl_projectScalarFieldEnum[]
  }

  /**
   * hl_project findMany
   */
  export type hl_projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * Filter, which hl_projects to fetch.
     */
    where?: hl_projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_projects to fetch.
     */
    orderBy?: hl_projectOrderByWithRelationInput | hl_projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hl_projects.
     */
    cursor?: hl_projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_projects.
     */
    skip?: number
    distinct?: Hl_projectScalarFieldEnum | Hl_projectScalarFieldEnum[]
  }

  /**
   * hl_project create
   */
  export type hl_projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * The data needed to create a hl_project.
     */
    data: XOR<hl_projectCreateInput, hl_projectUncheckedCreateInput>
  }

  /**
   * hl_project createMany
   */
  export type hl_projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hl_projects.
     */
    data: hl_projectCreateManyInput | hl_projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_project createManyAndReturn
   */
  export type hl_projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * The data used to create many hl_projects.
     */
    data: hl_projectCreateManyInput | hl_projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_project update
   */
  export type hl_projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * The data needed to update a hl_project.
     */
    data: XOR<hl_projectUpdateInput, hl_projectUncheckedUpdateInput>
    /**
     * Choose, which hl_project to update.
     */
    where: hl_projectWhereUniqueInput
  }

  /**
   * hl_project updateMany
   */
  export type hl_projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hl_projects.
     */
    data: XOR<hl_projectUpdateManyMutationInput, hl_projectUncheckedUpdateManyInput>
    /**
     * Filter which hl_projects to update
     */
    where?: hl_projectWhereInput
    /**
     * Limit how many hl_projects to update.
     */
    limit?: number
  }

  /**
   * hl_project updateManyAndReturn
   */
  export type hl_projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * The data used to update hl_projects.
     */
    data: XOR<hl_projectUpdateManyMutationInput, hl_projectUncheckedUpdateManyInput>
    /**
     * Filter which hl_projects to update
     */
    where?: hl_projectWhereInput
    /**
     * Limit how many hl_projects to update.
     */
    limit?: number
  }

  /**
   * hl_project upsert
   */
  export type hl_projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * The filter to search for the hl_project to update in case it exists.
     */
    where: hl_projectWhereUniqueInput
    /**
     * In case the hl_project found by the `where` argument doesn't exist, create a new hl_project with this data.
     */
    create: XOR<hl_projectCreateInput, hl_projectUncheckedCreateInput>
    /**
     * In case the hl_project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hl_projectUpdateInput, hl_projectUncheckedUpdateInput>
  }

  /**
   * hl_project delete
   */
  export type hl_projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
    /**
     * Filter which hl_project to delete.
     */
    where: hl_projectWhereUniqueInput
  }

  /**
   * hl_project deleteMany
   */
  export type hl_projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_projects to delete
     */
    where?: hl_projectWhereInput
    /**
     * Limit how many hl_projects to delete.
     */
    limit?: number
  }

  /**
   * hl_project without action
   */
  export type hl_projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_project
     */
    select?: hl_projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_project
     */
    omit?: hl_projectOmit<ExtArgs> | null
  }


  /**
   * Model project_pipeline_stage
   */

  export type AggregateProject_pipeline_stage = {
    _count: Project_pipeline_stageCountAggregateOutputType | null
    _avg: Project_pipeline_stageAvgAggregateOutputType | null
    _sum: Project_pipeline_stageSumAggregateOutputType | null
    _min: Project_pipeline_stageMinAggregateOutputType | null
    _max: Project_pipeline_stageMaxAggregateOutputType | null
  }

  export type Project_pipeline_stageAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_pipeline_stageSumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Project_pipeline_stageMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    name: string | null
    desc: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Project_pipeline_stageMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    name: string | null
    desc: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Project_pipeline_stageCountAggregateOutputType = {
    id: number
    project_id: number
    name: number
    desc: number
    type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Project_pipeline_stageAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_pipeline_stageSumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Project_pipeline_stageMinAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    desc?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type Project_pipeline_stageMaxAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    desc?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type Project_pipeline_stageCountAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    desc?: true
    type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Project_pipeline_stageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_pipeline_stage to aggregate.
     */
    where?: project_pipeline_stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_pipeline_stages to fetch.
     */
    orderBy?: project_pipeline_stageOrderByWithRelationInput | project_pipeline_stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_pipeline_stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_pipeline_stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_pipeline_stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_pipeline_stages
    **/
    _count?: true | Project_pipeline_stageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_pipeline_stageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_pipeline_stageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_pipeline_stageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_pipeline_stageMaxAggregateInputType
  }

  export type GetProject_pipeline_stageAggregateType<T extends Project_pipeline_stageAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_pipeline_stage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_pipeline_stage[P]>
      : GetScalarType<T[P], AggregateProject_pipeline_stage[P]>
  }




  export type project_pipeline_stageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_pipeline_stageWhereInput
    orderBy?: project_pipeline_stageOrderByWithAggregationInput | project_pipeline_stageOrderByWithAggregationInput[]
    by: Project_pipeline_stageScalarFieldEnum[] | Project_pipeline_stageScalarFieldEnum
    having?: project_pipeline_stageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_pipeline_stageCountAggregateInputType | true
    _avg?: Project_pipeline_stageAvgAggregateInputType
    _sum?: Project_pipeline_stageSumAggregateInputType
    _min?: Project_pipeline_stageMinAggregateInputType
    _max?: Project_pipeline_stageMaxAggregateInputType
  }

  export type Project_pipeline_stageGroupByOutputType = {
    id: number
    project_id: number
    name: string
    desc: string
    type: string
    created_at: Date
    updated_at: Date
    _count: Project_pipeline_stageCountAggregateOutputType | null
    _avg: Project_pipeline_stageAvgAggregateOutputType | null
    _sum: Project_pipeline_stageSumAggregateOutputType | null
    _min: Project_pipeline_stageMinAggregateOutputType | null
    _max: Project_pipeline_stageMaxAggregateOutputType | null
  }

  type GetProject_pipeline_stageGroupByPayload<T extends project_pipeline_stageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_pipeline_stageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_pipeline_stageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_pipeline_stageGroupByOutputType[P]>
            : GetScalarType<T[P], Project_pipeline_stageGroupByOutputType[P]>
        }
      >
    >


  export type project_pipeline_stageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["project_pipeline_stage"]>

  export type project_pipeline_stageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["project_pipeline_stage"]>

  export type project_pipeline_stageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["project_pipeline_stage"]>

  export type project_pipeline_stageSelectScalar = {
    id?: boolean
    project_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type project_pipeline_stageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "name" | "desc" | "type" | "created_at" | "updated_at", ExtArgs["result"]["project_pipeline_stage"]>

  export type $project_pipeline_stagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_pipeline_stage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number
      name: string
      desc: string
      type: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["project_pipeline_stage"]>
    composites: {}
  }

  type project_pipeline_stageGetPayload<S extends boolean | null | undefined | project_pipeline_stageDefaultArgs> = $Result.GetResult<Prisma.$project_pipeline_stagePayload, S>

  type project_pipeline_stageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_pipeline_stageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_pipeline_stageCountAggregateInputType | true
    }

  export interface project_pipeline_stageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_pipeline_stage'], meta: { name: 'project_pipeline_stage' } }
    /**
     * Find zero or one Project_pipeline_stage that matches the filter.
     * @param {project_pipeline_stageFindUniqueArgs} args - Arguments to find a Project_pipeline_stage
     * @example
     * // Get one Project_pipeline_stage
     * const project_pipeline_stage = await prisma.project_pipeline_stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_pipeline_stageFindUniqueArgs>(args: SelectSubset<T, project_pipeline_stageFindUniqueArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_pipeline_stage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_pipeline_stageFindUniqueOrThrowArgs} args - Arguments to find a Project_pipeline_stage
     * @example
     * // Get one Project_pipeline_stage
     * const project_pipeline_stage = await prisma.project_pipeline_stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_pipeline_stageFindUniqueOrThrowArgs>(args: SelectSubset<T, project_pipeline_stageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_pipeline_stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_pipeline_stageFindFirstArgs} args - Arguments to find a Project_pipeline_stage
     * @example
     * // Get one Project_pipeline_stage
     * const project_pipeline_stage = await prisma.project_pipeline_stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_pipeline_stageFindFirstArgs>(args?: SelectSubset<T, project_pipeline_stageFindFirstArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_pipeline_stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_pipeline_stageFindFirstOrThrowArgs} args - Arguments to find a Project_pipeline_stage
     * @example
     * // Get one Project_pipeline_stage
     * const project_pipeline_stage = await prisma.project_pipeline_stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_pipeline_stageFindFirstOrThrowArgs>(args?: SelectSubset<T, project_pipeline_stageFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_pipeline_stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_pipeline_stageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_pipeline_stages
     * const project_pipeline_stages = await prisma.project_pipeline_stage.findMany()
     * 
     * // Get first 10 Project_pipeline_stages
     * const project_pipeline_stages = await prisma.project_pipeline_stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_pipeline_stageWithIdOnly = await prisma.project_pipeline_stage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_pipeline_stageFindManyArgs>(args?: SelectSubset<T, project_pipeline_stageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_pipeline_stage.
     * @param {project_pipeline_stageCreateArgs} args - Arguments to create a Project_pipeline_stage.
     * @example
     * // Create one Project_pipeline_stage
     * const Project_pipeline_stage = await prisma.project_pipeline_stage.create({
     *   data: {
     *     // ... data to create a Project_pipeline_stage
     *   }
     * })
     * 
     */
    create<T extends project_pipeline_stageCreateArgs>(args: SelectSubset<T, project_pipeline_stageCreateArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_pipeline_stages.
     * @param {project_pipeline_stageCreateManyArgs} args - Arguments to create many Project_pipeline_stages.
     * @example
     * // Create many Project_pipeline_stages
     * const project_pipeline_stage = await prisma.project_pipeline_stage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_pipeline_stageCreateManyArgs>(args?: SelectSubset<T, project_pipeline_stageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_pipeline_stages and returns the data saved in the database.
     * @param {project_pipeline_stageCreateManyAndReturnArgs} args - Arguments to create many Project_pipeline_stages.
     * @example
     * // Create many Project_pipeline_stages
     * const project_pipeline_stage = await prisma.project_pipeline_stage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_pipeline_stages and only return the `id`
     * const project_pipeline_stageWithIdOnly = await prisma.project_pipeline_stage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_pipeline_stageCreateManyAndReturnArgs>(args?: SelectSubset<T, project_pipeline_stageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_pipeline_stage.
     * @param {project_pipeline_stageDeleteArgs} args - Arguments to delete one Project_pipeline_stage.
     * @example
     * // Delete one Project_pipeline_stage
     * const Project_pipeline_stage = await prisma.project_pipeline_stage.delete({
     *   where: {
     *     // ... filter to delete one Project_pipeline_stage
     *   }
     * })
     * 
     */
    delete<T extends project_pipeline_stageDeleteArgs>(args: SelectSubset<T, project_pipeline_stageDeleteArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_pipeline_stage.
     * @param {project_pipeline_stageUpdateArgs} args - Arguments to update one Project_pipeline_stage.
     * @example
     * // Update one Project_pipeline_stage
     * const project_pipeline_stage = await prisma.project_pipeline_stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_pipeline_stageUpdateArgs>(args: SelectSubset<T, project_pipeline_stageUpdateArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_pipeline_stages.
     * @param {project_pipeline_stageDeleteManyArgs} args - Arguments to filter Project_pipeline_stages to delete.
     * @example
     * // Delete a few Project_pipeline_stages
     * const { count } = await prisma.project_pipeline_stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_pipeline_stageDeleteManyArgs>(args?: SelectSubset<T, project_pipeline_stageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_pipeline_stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_pipeline_stageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_pipeline_stages
     * const project_pipeline_stage = await prisma.project_pipeline_stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_pipeline_stageUpdateManyArgs>(args: SelectSubset<T, project_pipeline_stageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_pipeline_stages and returns the data updated in the database.
     * @param {project_pipeline_stageUpdateManyAndReturnArgs} args - Arguments to update many Project_pipeline_stages.
     * @example
     * // Update many Project_pipeline_stages
     * const project_pipeline_stage = await prisma.project_pipeline_stage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_pipeline_stages and only return the `id`
     * const project_pipeline_stageWithIdOnly = await prisma.project_pipeline_stage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_pipeline_stageUpdateManyAndReturnArgs>(args: SelectSubset<T, project_pipeline_stageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_pipeline_stage.
     * @param {project_pipeline_stageUpsertArgs} args - Arguments to update or create a Project_pipeline_stage.
     * @example
     * // Update or create a Project_pipeline_stage
     * const project_pipeline_stage = await prisma.project_pipeline_stage.upsert({
     *   create: {
     *     // ... data to create a Project_pipeline_stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_pipeline_stage we want to update
     *   }
     * })
     */
    upsert<T extends project_pipeline_stageUpsertArgs>(args: SelectSubset<T, project_pipeline_stageUpsertArgs<ExtArgs>>): Prisma__project_pipeline_stageClient<$Result.GetResult<Prisma.$project_pipeline_stagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_pipeline_stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_pipeline_stageCountArgs} args - Arguments to filter Project_pipeline_stages to count.
     * @example
     * // Count the number of Project_pipeline_stages
     * const count = await prisma.project_pipeline_stage.count({
     *   where: {
     *     // ... the filter for the Project_pipeline_stages we want to count
     *   }
     * })
    **/
    count<T extends project_pipeline_stageCountArgs>(
      args?: Subset<T, project_pipeline_stageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_pipeline_stageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_pipeline_stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_pipeline_stageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_pipeline_stageAggregateArgs>(args: Subset<T, Project_pipeline_stageAggregateArgs>): Prisma.PrismaPromise<GetProject_pipeline_stageAggregateType<T>>

    /**
     * Group by Project_pipeline_stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_pipeline_stageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_pipeline_stageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_pipeline_stageGroupByArgs['orderBy'] }
        : { orderBy?: project_pipeline_stageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_pipeline_stageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_pipeline_stageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_pipeline_stage model
   */
  readonly fields: project_pipeline_stageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_pipeline_stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_pipeline_stageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_pipeline_stage model
   */
  interface project_pipeline_stageFieldRefs {
    readonly id: FieldRef<"project_pipeline_stage", 'Int'>
    readonly project_id: FieldRef<"project_pipeline_stage", 'Int'>
    readonly name: FieldRef<"project_pipeline_stage", 'String'>
    readonly desc: FieldRef<"project_pipeline_stage", 'String'>
    readonly type: FieldRef<"project_pipeline_stage", 'String'>
    readonly created_at: FieldRef<"project_pipeline_stage", 'DateTime'>
    readonly updated_at: FieldRef<"project_pipeline_stage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project_pipeline_stage findUnique
   */
  export type project_pipeline_stageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * Filter, which project_pipeline_stage to fetch.
     */
    where: project_pipeline_stageWhereUniqueInput
  }

  /**
   * project_pipeline_stage findUniqueOrThrow
   */
  export type project_pipeline_stageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * Filter, which project_pipeline_stage to fetch.
     */
    where: project_pipeline_stageWhereUniqueInput
  }

  /**
   * project_pipeline_stage findFirst
   */
  export type project_pipeline_stageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * Filter, which project_pipeline_stage to fetch.
     */
    where?: project_pipeline_stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_pipeline_stages to fetch.
     */
    orderBy?: project_pipeline_stageOrderByWithRelationInput | project_pipeline_stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_pipeline_stages.
     */
    cursor?: project_pipeline_stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_pipeline_stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_pipeline_stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_pipeline_stages.
     */
    distinct?: Project_pipeline_stageScalarFieldEnum | Project_pipeline_stageScalarFieldEnum[]
  }

  /**
   * project_pipeline_stage findFirstOrThrow
   */
  export type project_pipeline_stageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * Filter, which project_pipeline_stage to fetch.
     */
    where?: project_pipeline_stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_pipeline_stages to fetch.
     */
    orderBy?: project_pipeline_stageOrderByWithRelationInput | project_pipeline_stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_pipeline_stages.
     */
    cursor?: project_pipeline_stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_pipeline_stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_pipeline_stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_pipeline_stages.
     */
    distinct?: Project_pipeline_stageScalarFieldEnum | Project_pipeline_stageScalarFieldEnum[]
  }

  /**
   * project_pipeline_stage findMany
   */
  export type project_pipeline_stageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * Filter, which project_pipeline_stages to fetch.
     */
    where?: project_pipeline_stageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_pipeline_stages to fetch.
     */
    orderBy?: project_pipeline_stageOrderByWithRelationInput | project_pipeline_stageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_pipeline_stages.
     */
    cursor?: project_pipeline_stageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_pipeline_stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_pipeline_stages.
     */
    skip?: number
    distinct?: Project_pipeline_stageScalarFieldEnum | Project_pipeline_stageScalarFieldEnum[]
  }

  /**
   * project_pipeline_stage create
   */
  export type project_pipeline_stageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * The data needed to create a project_pipeline_stage.
     */
    data: XOR<project_pipeline_stageCreateInput, project_pipeline_stageUncheckedCreateInput>
  }

  /**
   * project_pipeline_stage createMany
   */
  export type project_pipeline_stageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_pipeline_stages.
     */
    data: project_pipeline_stageCreateManyInput | project_pipeline_stageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_pipeline_stage createManyAndReturn
   */
  export type project_pipeline_stageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * The data used to create many project_pipeline_stages.
     */
    data: project_pipeline_stageCreateManyInput | project_pipeline_stageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_pipeline_stage update
   */
  export type project_pipeline_stageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * The data needed to update a project_pipeline_stage.
     */
    data: XOR<project_pipeline_stageUpdateInput, project_pipeline_stageUncheckedUpdateInput>
    /**
     * Choose, which project_pipeline_stage to update.
     */
    where: project_pipeline_stageWhereUniqueInput
  }

  /**
   * project_pipeline_stage updateMany
   */
  export type project_pipeline_stageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_pipeline_stages.
     */
    data: XOR<project_pipeline_stageUpdateManyMutationInput, project_pipeline_stageUncheckedUpdateManyInput>
    /**
     * Filter which project_pipeline_stages to update
     */
    where?: project_pipeline_stageWhereInput
    /**
     * Limit how many project_pipeline_stages to update.
     */
    limit?: number
  }

  /**
   * project_pipeline_stage updateManyAndReturn
   */
  export type project_pipeline_stageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * The data used to update project_pipeline_stages.
     */
    data: XOR<project_pipeline_stageUpdateManyMutationInput, project_pipeline_stageUncheckedUpdateManyInput>
    /**
     * Filter which project_pipeline_stages to update
     */
    where?: project_pipeline_stageWhereInput
    /**
     * Limit how many project_pipeline_stages to update.
     */
    limit?: number
  }

  /**
   * project_pipeline_stage upsert
   */
  export type project_pipeline_stageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * The filter to search for the project_pipeline_stage to update in case it exists.
     */
    where: project_pipeline_stageWhereUniqueInput
    /**
     * In case the project_pipeline_stage found by the `where` argument doesn't exist, create a new project_pipeline_stage with this data.
     */
    create: XOR<project_pipeline_stageCreateInput, project_pipeline_stageUncheckedCreateInput>
    /**
     * In case the project_pipeline_stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_pipeline_stageUpdateInput, project_pipeline_stageUncheckedUpdateInput>
  }

  /**
   * project_pipeline_stage delete
   */
  export type project_pipeline_stageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
    /**
     * Filter which project_pipeline_stage to delete.
     */
    where: project_pipeline_stageWhereUniqueInput
  }

  /**
   * project_pipeline_stage deleteMany
   */
  export type project_pipeline_stageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_pipeline_stages to delete
     */
    where?: project_pipeline_stageWhereInput
    /**
     * Limit how many project_pipeline_stages to delete.
     */
    limit?: number
  }

  /**
   * project_pipeline_stage without action
   */
  export type project_pipeline_stageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_pipeline_stage
     */
    select?: project_pipeline_stageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_pipeline_stage
     */
    omit?: project_pipeline_stageOmit<ExtArgs> | null
  }


  /**
   * Model hl_user_task
   */

  export type AggregateHl_user_task = {
    _count: Hl_user_taskCountAggregateOutputType | null
    _avg: Hl_user_taskAvgAggregateOutputType | null
    _sum: Hl_user_taskSumAggregateOutputType | null
    _min: Hl_user_taskMinAggregateOutputType | null
    _max: Hl_user_taskMaxAggregateOutputType | null
  }

  export type Hl_user_taskAvgAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    task_id: number | null
  }

  export type Hl_user_taskSumAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    task_id: number | null
  }

  export type Hl_user_taskMinAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    task_id: number | null
    assigned_at: Date | null
    task_expiry: Date | null
    completed_at: Date | null
  }

  export type Hl_user_taskMaxAggregateOutputType = {
    id: number | null
    platform_user_id: number | null
    task_id: number | null
    assigned_at: Date | null
    task_expiry: Date | null
    completed_at: Date | null
  }

  export type Hl_user_taskCountAggregateOutputType = {
    id: number
    platform_user_id: number
    task_id: number
    assigned_at: number
    task_expiry: number
    completed_at: number
    _all: number
  }


  export type Hl_user_taskAvgAggregateInputType = {
    id?: true
    platform_user_id?: true
    task_id?: true
  }

  export type Hl_user_taskSumAggregateInputType = {
    id?: true
    platform_user_id?: true
    task_id?: true
  }

  export type Hl_user_taskMinAggregateInputType = {
    id?: true
    platform_user_id?: true
    task_id?: true
    assigned_at?: true
    task_expiry?: true
    completed_at?: true
  }

  export type Hl_user_taskMaxAggregateInputType = {
    id?: true
    platform_user_id?: true
    task_id?: true
    assigned_at?: true
    task_expiry?: true
    completed_at?: true
  }

  export type Hl_user_taskCountAggregateInputType = {
    id?: true
    platform_user_id?: true
    task_id?: true
    assigned_at?: true
    task_expiry?: true
    completed_at?: true
    _all?: true
  }

  export type Hl_user_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_user_task to aggregate.
     */
    where?: hl_user_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_tasks to fetch.
     */
    orderBy?: hl_user_taskOrderByWithRelationInput | hl_user_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hl_user_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hl_user_tasks
    **/
    _count?: true | Hl_user_taskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hl_user_taskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hl_user_taskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hl_user_taskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hl_user_taskMaxAggregateInputType
  }

  export type GetHl_user_taskAggregateType<T extends Hl_user_taskAggregateArgs> = {
        [P in keyof T & keyof AggregateHl_user_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHl_user_task[P]>
      : GetScalarType<T[P], AggregateHl_user_task[P]>
  }




  export type hl_user_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hl_user_taskWhereInput
    orderBy?: hl_user_taskOrderByWithAggregationInput | hl_user_taskOrderByWithAggregationInput[]
    by: Hl_user_taskScalarFieldEnum[] | Hl_user_taskScalarFieldEnum
    having?: hl_user_taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hl_user_taskCountAggregateInputType | true
    _avg?: Hl_user_taskAvgAggregateInputType
    _sum?: Hl_user_taskSumAggregateInputType
    _min?: Hl_user_taskMinAggregateInputType
    _max?: Hl_user_taskMaxAggregateInputType
  }

  export type Hl_user_taskGroupByOutputType = {
    id: number
    platform_user_id: number
    task_id: number
    assigned_at: Date
    task_expiry: Date | null
    completed_at: Date | null
    _count: Hl_user_taskCountAggregateOutputType | null
    _avg: Hl_user_taskAvgAggregateOutputType | null
    _sum: Hl_user_taskSumAggregateOutputType | null
    _min: Hl_user_taskMinAggregateOutputType | null
    _max: Hl_user_taskMaxAggregateOutputType | null
  }

  type GetHl_user_taskGroupByPayload<T extends hl_user_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hl_user_taskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hl_user_taskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hl_user_taskGroupByOutputType[P]>
            : GetScalarType<T[P], Hl_user_taskGroupByOutputType[P]>
        }
      >
    >


  export type hl_user_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    task_id?: boolean
    assigned_at?: boolean
    task_expiry?: boolean
    completed_at?: boolean
  }, ExtArgs["result"]["hl_user_task"]>

  export type hl_user_taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    task_id?: boolean
    assigned_at?: boolean
    task_expiry?: boolean
    completed_at?: boolean
  }, ExtArgs["result"]["hl_user_task"]>

  export type hl_user_taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_user_id?: boolean
    task_id?: boolean
    assigned_at?: boolean
    task_expiry?: boolean
    completed_at?: boolean
  }, ExtArgs["result"]["hl_user_task"]>

  export type hl_user_taskSelectScalar = {
    id?: boolean
    platform_user_id?: boolean
    task_id?: boolean
    assigned_at?: boolean
    task_expiry?: boolean
    completed_at?: boolean
  }

  export type hl_user_taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform_user_id" | "task_id" | "assigned_at" | "task_expiry" | "completed_at", ExtArgs["result"]["hl_user_task"]>

  export type $hl_user_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hl_user_task"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform_user_id: number
      task_id: number
      assigned_at: Date
      task_expiry: Date | null
      completed_at: Date | null
    }, ExtArgs["result"]["hl_user_task"]>
    composites: {}
  }

  type hl_user_taskGetPayload<S extends boolean | null | undefined | hl_user_taskDefaultArgs> = $Result.GetResult<Prisma.$hl_user_taskPayload, S>

  type hl_user_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hl_user_taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hl_user_taskCountAggregateInputType | true
    }

  export interface hl_user_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hl_user_task'], meta: { name: 'hl_user_task' } }
    /**
     * Find zero or one Hl_user_task that matches the filter.
     * @param {hl_user_taskFindUniqueArgs} args - Arguments to find a Hl_user_task
     * @example
     * // Get one Hl_user_task
     * const hl_user_task = await prisma.hl_user_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hl_user_taskFindUniqueArgs>(args: SelectSubset<T, hl_user_taskFindUniqueArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hl_user_task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hl_user_taskFindUniqueOrThrowArgs} args - Arguments to find a Hl_user_task
     * @example
     * // Get one Hl_user_task
     * const hl_user_task = await prisma.hl_user_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hl_user_taskFindUniqueOrThrowArgs>(args: SelectSubset<T, hl_user_taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_user_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_taskFindFirstArgs} args - Arguments to find a Hl_user_task
     * @example
     * // Get one Hl_user_task
     * const hl_user_task = await prisma.hl_user_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hl_user_taskFindFirstArgs>(args?: SelectSubset<T, hl_user_taskFindFirstArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_user_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_taskFindFirstOrThrowArgs} args - Arguments to find a Hl_user_task
     * @example
     * // Get one Hl_user_task
     * const hl_user_task = await prisma.hl_user_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hl_user_taskFindFirstOrThrowArgs>(args?: SelectSubset<T, hl_user_taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hl_user_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hl_user_tasks
     * const hl_user_tasks = await prisma.hl_user_task.findMany()
     * 
     * // Get first 10 Hl_user_tasks
     * const hl_user_tasks = await prisma.hl_user_task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hl_user_taskWithIdOnly = await prisma.hl_user_task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hl_user_taskFindManyArgs>(args?: SelectSubset<T, hl_user_taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hl_user_task.
     * @param {hl_user_taskCreateArgs} args - Arguments to create a Hl_user_task.
     * @example
     * // Create one Hl_user_task
     * const Hl_user_task = await prisma.hl_user_task.create({
     *   data: {
     *     // ... data to create a Hl_user_task
     *   }
     * })
     * 
     */
    create<T extends hl_user_taskCreateArgs>(args: SelectSubset<T, hl_user_taskCreateArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hl_user_tasks.
     * @param {hl_user_taskCreateManyArgs} args - Arguments to create many Hl_user_tasks.
     * @example
     * // Create many Hl_user_tasks
     * const hl_user_task = await prisma.hl_user_task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hl_user_taskCreateManyArgs>(args?: SelectSubset<T, hl_user_taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hl_user_tasks and returns the data saved in the database.
     * @param {hl_user_taskCreateManyAndReturnArgs} args - Arguments to create many Hl_user_tasks.
     * @example
     * // Create many Hl_user_tasks
     * const hl_user_task = await prisma.hl_user_task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hl_user_tasks and only return the `id`
     * const hl_user_taskWithIdOnly = await prisma.hl_user_task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hl_user_taskCreateManyAndReturnArgs>(args?: SelectSubset<T, hl_user_taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hl_user_task.
     * @param {hl_user_taskDeleteArgs} args - Arguments to delete one Hl_user_task.
     * @example
     * // Delete one Hl_user_task
     * const Hl_user_task = await prisma.hl_user_task.delete({
     *   where: {
     *     // ... filter to delete one Hl_user_task
     *   }
     * })
     * 
     */
    delete<T extends hl_user_taskDeleteArgs>(args: SelectSubset<T, hl_user_taskDeleteArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hl_user_task.
     * @param {hl_user_taskUpdateArgs} args - Arguments to update one Hl_user_task.
     * @example
     * // Update one Hl_user_task
     * const hl_user_task = await prisma.hl_user_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hl_user_taskUpdateArgs>(args: SelectSubset<T, hl_user_taskUpdateArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hl_user_tasks.
     * @param {hl_user_taskDeleteManyArgs} args - Arguments to filter Hl_user_tasks to delete.
     * @example
     * // Delete a few Hl_user_tasks
     * const { count } = await prisma.hl_user_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hl_user_taskDeleteManyArgs>(args?: SelectSubset<T, hl_user_taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_user_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hl_user_tasks
     * const hl_user_task = await prisma.hl_user_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hl_user_taskUpdateManyArgs>(args: SelectSubset<T, hl_user_taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_user_tasks and returns the data updated in the database.
     * @param {hl_user_taskUpdateManyAndReturnArgs} args - Arguments to update many Hl_user_tasks.
     * @example
     * // Update many Hl_user_tasks
     * const hl_user_task = await prisma.hl_user_task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hl_user_tasks and only return the `id`
     * const hl_user_taskWithIdOnly = await prisma.hl_user_task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hl_user_taskUpdateManyAndReturnArgs>(args: SelectSubset<T, hl_user_taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hl_user_task.
     * @param {hl_user_taskUpsertArgs} args - Arguments to update or create a Hl_user_task.
     * @example
     * // Update or create a Hl_user_task
     * const hl_user_task = await prisma.hl_user_task.upsert({
     *   create: {
     *     // ... data to create a Hl_user_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hl_user_task we want to update
     *   }
     * })
     */
    upsert<T extends hl_user_taskUpsertArgs>(args: SelectSubset<T, hl_user_taskUpsertArgs<ExtArgs>>): Prisma__hl_user_taskClient<$Result.GetResult<Prisma.$hl_user_taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hl_user_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_taskCountArgs} args - Arguments to filter Hl_user_tasks to count.
     * @example
     * // Count the number of Hl_user_tasks
     * const count = await prisma.hl_user_task.count({
     *   where: {
     *     // ... the filter for the Hl_user_tasks we want to count
     *   }
     * })
    **/
    count<T extends hl_user_taskCountArgs>(
      args?: Subset<T, hl_user_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hl_user_taskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hl_user_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hl_user_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hl_user_taskAggregateArgs>(args: Subset<T, Hl_user_taskAggregateArgs>): Prisma.PrismaPromise<GetHl_user_taskAggregateType<T>>

    /**
     * Group by Hl_user_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_user_taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hl_user_taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hl_user_taskGroupByArgs['orderBy'] }
        : { orderBy?: hl_user_taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hl_user_taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHl_user_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hl_user_task model
   */
  readonly fields: hl_user_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hl_user_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hl_user_taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hl_user_task model
   */
  interface hl_user_taskFieldRefs {
    readonly id: FieldRef<"hl_user_task", 'Int'>
    readonly platform_user_id: FieldRef<"hl_user_task", 'Int'>
    readonly task_id: FieldRef<"hl_user_task", 'Int'>
    readonly assigned_at: FieldRef<"hl_user_task", 'DateTime'>
    readonly task_expiry: FieldRef<"hl_user_task", 'DateTime'>
    readonly completed_at: FieldRef<"hl_user_task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hl_user_task findUnique
   */
  export type hl_user_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_task to fetch.
     */
    where: hl_user_taskWhereUniqueInput
  }

  /**
   * hl_user_task findUniqueOrThrow
   */
  export type hl_user_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_task to fetch.
     */
    where: hl_user_taskWhereUniqueInput
  }

  /**
   * hl_user_task findFirst
   */
  export type hl_user_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_task to fetch.
     */
    where?: hl_user_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_tasks to fetch.
     */
    orderBy?: hl_user_taskOrderByWithRelationInput | hl_user_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_user_tasks.
     */
    cursor?: hl_user_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_user_tasks.
     */
    distinct?: Hl_user_taskScalarFieldEnum | Hl_user_taskScalarFieldEnum[]
  }

  /**
   * hl_user_task findFirstOrThrow
   */
  export type hl_user_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_task to fetch.
     */
    where?: hl_user_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_tasks to fetch.
     */
    orderBy?: hl_user_taskOrderByWithRelationInput | hl_user_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_user_tasks.
     */
    cursor?: hl_user_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_user_tasks.
     */
    distinct?: Hl_user_taskScalarFieldEnum | Hl_user_taskScalarFieldEnum[]
  }

  /**
   * hl_user_task findMany
   */
  export type hl_user_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_user_tasks to fetch.
     */
    where?: hl_user_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_user_tasks to fetch.
     */
    orderBy?: hl_user_taskOrderByWithRelationInput | hl_user_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hl_user_tasks.
     */
    cursor?: hl_user_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_user_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_user_tasks.
     */
    skip?: number
    distinct?: Hl_user_taskScalarFieldEnum | Hl_user_taskScalarFieldEnum[]
  }

  /**
   * hl_user_task create
   */
  export type hl_user_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * The data needed to create a hl_user_task.
     */
    data: XOR<hl_user_taskCreateInput, hl_user_taskUncheckedCreateInput>
  }

  /**
   * hl_user_task createMany
   */
  export type hl_user_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hl_user_tasks.
     */
    data: hl_user_taskCreateManyInput | hl_user_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_user_task createManyAndReturn
   */
  export type hl_user_taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * The data used to create many hl_user_tasks.
     */
    data: hl_user_taskCreateManyInput | hl_user_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_user_task update
   */
  export type hl_user_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * The data needed to update a hl_user_task.
     */
    data: XOR<hl_user_taskUpdateInput, hl_user_taskUncheckedUpdateInput>
    /**
     * Choose, which hl_user_task to update.
     */
    where: hl_user_taskWhereUniqueInput
  }

  /**
   * hl_user_task updateMany
   */
  export type hl_user_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hl_user_tasks.
     */
    data: XOR<hl_user_taskUpdateManyMutationInput, hl_user_taskUncheckedUpdateManyInput>
    /**
     * Filter which hl_user_tasks to update
     */
    where?: hl_user_taskWhereInput
    /**
     * Limit how many hl_user_tasks to update.
     */
    limit?: number
  }

  /**
   * hl_user_task updateManyAndReturn
   */
  export type hl_user_taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * The data used to update hl_user_tasks.
     */
    data: XOR<hl_user_taskUpdateManyMutationInput, hl_user_taskUncheckedUpdateManyInput>
    /**
     * Filter which hl_user_tasks to update
     */
    where?: hl_user_taskWhereInput
    /**
     * Limit how many hl_user_tasks to update.
     */
    limit?: number
  }

  /**
   * hl_user_task upsert
   */
  export type hl_user_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * The filter to search for the hl_user_task to update in case it exists.
     */
    where: hl_user_taskWhereUniqueInput
    /**
     * In case the hl_user_task found by the `where` argument doesn't exist, create a new hl_user_task with this data.
     */
    create: XOR<hl_user_taskCreateInput, hl_user_taskUncheckedCreateInput>
    /**
     * In case the hl_user_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hl_user_taskUpdateInput, hl_user_taskUncheckedUpdateInput>
  }

  /**
   * hl_user_task delete
   */
  export type hl_user_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
    /**
     * Filter which hl_user_task to delete.
     */
    where: hl_user_taskWhereUniqueInput
  }

  /**
   * hl_user_task deleteMany
   */
  export type hl_user_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_user_tasks to delete
     */
    where?: hl_user_taskWhereInput
    /**
     * Limit how many hl_user_tasks to delete.
     */
    limit?: number
  }

  /**
   * hl_user_task without action
   */
  export type hl_user_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_user_task
     */
    select?: hl_user_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_user_task
     */
    omit?: hl_user_taskOmit<ExtArgs> | null
  }


  /**
   * Model hl_task
   */

  export type AggregateHl_task = {
    _count: Hl_taskCountAggregateOutputType | null
    _avg: Hl_taskAvgAggregateOutputType | null
    _sum: Hl_taskSumAggregateOutputType | null
    _min: Hl_taskMinAggregateOutputType | null
    _max: Hl_taskMaxAggregateOutputType | null
  }

  export type Hl_taskAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
    annotator_task_id: number | null
  }

  export type Hl_taskSumAggregateOutputType = {
    id: number | null
    project_id: number | null
    annotator_task_id: number | null
  }

  export type Hl_taskMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    annotator_task_id: number | null
    name: string | null
    desc: string | null
    type: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_taskMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    annotator_task_id: number | null
    name: string | null
    desc: string | null
    type: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hl_taskCountAggregateOutputType = {
    id: number
    project_id: number
    annotator_task_id: number
    name: number
    desc: number
    type: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hl_taskAvgAggregateInputType = {
    id?: true
    project_id?: true
    annotator_task_id?: true
  }

  export type Hl_taskSumAggregateInputType = {
    id?: true
    project_id?: true
    annotator_task_id?: true
  }

  export type Hl_taskMinAggregateInputType = {
    id?: true
    project_id?: true
    annotator_task_id?: true
    name?: true
    desc?: true
    type?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_taskMaxAggregateInputType = {
    id?: true
    project_id?: true
    annotator_task_id?: true
    name?: true
    desc?: true
    type?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Hl_taskCountAggregateInputType = {
    id?: true
    project_id?: true
    annotator_task_id?: true
    name?: true
    desc?: true
    type?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hl_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_task to aggregate.
     */
    where?: hl_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_tasks to fetch.
     */
    orderBy?: hl_taskOrderByWithRelationInput | hl_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hl_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hl_tasks
    **/
    _count?: true | Hl_taskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hl_taskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hl_taskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hl_taskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hl_taskMaxAggregateInputType
  }

  export type GetHl_taskAggregateType<T extends Hl_taskAggregateArgs> = {
        [P in keyof T & keyof AggregateHl_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHl_task[P]>
      : GetScalarType<T[P], AggregateHl_task[P]>
  }




  export type hl_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hl_taskWhereInput
    orderBy?: hl_taskOrderByWithAggregationInput | hl_taskOrderByWithAggregationInput[]
    by: Hl_taskScalarFieldEnum[] | Hl_taskScalarFieldEnum
    having?: hl_taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hl_taskCountAggregateInputType | true
    _avg?: Hl_taskAvgAggregateInputType
    _sum?: Hl_taskSumAggregateInputType
    _min?: Hl_taskMinAggregateInputType
    _max?: Hl_taskMaxAggregateInputType
  }

  export type Hl_taskGroupByOutputType = {
    id: number
    project_id: number
    annotator_task_id: number
    name: string
    desc: string
    type: string
    status: string
    created_at: Date
    updated_at: Date
    _count: Hl_taskCountAggregateOutputType | null
    _avg: Hl_taskAvgAggregateOutputType | null
    _sum: Hl_taskSumAggregateOutputType | null
    _min: Hl_taskMinAggregateOutputType | null
    _max: Hl_taskMaxAggregateOutputType | null
  }

  type GetHl_taskGroupByPayload<T extends hl_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hl_taskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hl_taskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hl_taskGroupByOutputType[P]>
            : GetScalarType<T[P], Hl_taskGroupByOutputType[P]>
        }
      >
    >


  export type hl_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    annotator_task_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_task"]>

  export type hl_taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    annotator_task_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_task"]>

  export type hl_taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    annotator_task_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["hl_task"]>

  export type hl_taskSelectScalar = {
    id?: boolean
    project_id?: boolean
    annotator_task_id?: boolean
    name?: boolean
    desc?: boolean
    type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type hl_taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "annotator_task_id" | "name" | "desc" | "type" | "status" | "created_at" | "updated_at", ExtArgs["result"]["hl_task"]>

  export type $hl_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hl_task"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number
      annotator_task_id: number
      name: string
      desc: string
      type: string
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["hl_task"]>
    composites: {}
  }

  type hl_taskGetPayload<S extends boolean | null | undefined | hl_taskDefaultArgs> = $Result.GetResult<Prisma.$hl_taskPayload, S>

  type hl_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hl_taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hl_taskCountAggregateInputType | true
    }

  export interface hl_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hl_task'], meta: { name: 'hl_task' } }
    /**
     * Find zero or one Hl_task that matches the filter.
     * @param {hl_taskFindUniqueArgs} args - Arguments to find a Hl_task
     * @example
     * // Get one Hl_task
     * const hl_task = await prisma.hl_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hl_taskFindUniqueArgs>(args: SelectSubset<T, hl_taskFindUniqueArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hl_task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hl_taskFindUniqueOrThrowArgs} args - Arguments to find a Hl_task
     * @example
     * // Get one Hl_task
     * const hl_task = await prisma.hl_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hl_taskFindUniqueOrThrowArgs>(args: SelectSubset<T, hl_taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_taskFindFirstArgs} args - Arguments to find a Hl_task
     * @example
     * // Get one Hl_task
     * const hl_task = await prisma.hl_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hl_taskFindFirstArgs>(args?: SelectSubset<T, hl_taskFindFirstArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hl_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_taskFindFirstOrThrowArgs} args - Arguments to find a Hl_task
     * @example
     * // Get one Hl_task
     * const hl_task = await prisma.hl_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hl_taskFindFirstOrThrowArgs>(args?: SelectSubset<T, hl_taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hl_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hl_tasks
     * const hl_tasks = await prisma.hl_task.findMany()
     * 
     * // Get first 10 Hl_tasks
     * const hl_tasks = await prisma.hl_task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hl_taskWithIdOnly = await prisma.hl_task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hl_taskFindManyArgs>(args?: SelectSubset<T, hl_taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hl_task.
     * @param {hl_taskCreateArgs} args - Arguments to create a Hl_task.
     * @example
     * // Create one Hl_task
     * const Hl_task = await prisma.hl_task.create({
     *   data: {
     *     // ... data to create a Hl_task
     *   }
     * })
     * 
     */
    create<T extends hl_taskCreateArgs>(args: SelectSubset<T, hl_taskCreateArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hl_tasks.
     * @param {hl_taskCreateManyArgs} args - Arguments to create many Hl_tasks.
     * @example
     * // Create many Hl_tasks
     * const hl_task = await prisma.hl_task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hl_taskCreateManyArgs>(args?: SelectSubset<T, hl_taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hl_tasks and returns the data saved in the database.
     * @param {hl_taskCreateManyAndReturnArgs} args - Arguments to create many Hl_tasks.
     * @example
     * // Create many Hl_tasks
     * const hl_task = await prisma.hl_task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hl_tasks and only return the `id`
     * const hl_taskWithIdOnly = await prisma.hl_task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hl_taskCreateManyAndReturnArgs>(args?: SelectSubset<T, hl_taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hl_task.
     * @param {hl_taskDeleteArgs} args - Arguments to delete one Hl_task.
     * @example
     * // Delete one Hl_task
     * const Hl_task = await prisma.hl_task.delete({
     *   where: {
     *     // ... filter to delete one Hl_task
     *   }
     * })
     * 
     */
    delete<T extends hl_taskDeleteArgs>(args: SelectSubset<T, hl_taskDeleteArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hl_task.
     * @param {hl_taskUpdateArgs} args - Arguments to update one Hl_task.
     * @example
     * // Update one Hl_task
     * const hl_task = await prisma.hl_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hl_taskUpdateArgs>(args: SelectSubset<T, hl_taskUpdateArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hl_tasks.
     * @param {hl_taskDeleteManyArgs} args - Arguments to filter Hl_tasks to delete.
     * @example
     * // Delete a few Hl_tasks
     * const { count } = await prisma.hl_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hl_taskDeleteManyArgs>(args?: SelectSubset<T, hl_taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hl_tasks
     * const hl_task = await prisma.hl_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hl_taskUpdateManyArgs>(args: SelectSubset<T, hl_taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hl_tasks and returns the data updated in the database.
     * @param {hl_taskUpdateManyAndReturnArgs} args - Arguments to update many Hl_tasks.
     * @example
     * // Update many Hl_tasks
     * const hl_task = await prisma.hl_task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hl_tasks and only return the `id`
     * const hl_taskWithIdOnly = await prisma.hl_task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hl_taskUpdateManyAndReturnArgs>(args: SelectSubset<T, hl_taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hl_task.
     * @param {hl_taskUpsertArgs} args - Arguments to update or create a Hl_task.
     * @example
     * // Update or create a Hl_task
     * const hl_task = await prisma.hl_task.upsert({
     *   create: {
     *     // ... data to create a Hl_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hl_task we want to update
     *   }
     * })
     */
    upsert<T extends hl_taskUpsertArgs>(args: SelectSubset<T, hl_taskUpsertArgs<ExtArgs>>): Prisma__hl_taskClient<$Result.GetResult<Prisma.$hl_taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hl_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_taskCountArgs} args - Arguments to filter Hl_tasks to count.
     * @example
     * // Count the number of Hl_tasks
     * const count = await prisma.hl_task.count({
     *   where: {
     *     // ... the filter for the Hl_tasks we want to count
     *   }
     * })
    **/
    count<T extends hl_taskCountArgs>(
      args?: Subset<T, hl_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hl_taskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hl_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hl_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hl_taskAggregateArgs>(args: Subset<T, Hl_taskAggregateArgs>): Prisma.PrismaPromise<GetHl_taskAggregateType<T>>

    /**
     * Group by Hl_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hl_taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hl_taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hl_taskGroupByArgs['orderBy'] }
        : { orderBy?: hl_taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hl_taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHl_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hl_task model
   */
  readonly fields: hl_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hl_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hl_taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hl_task model
   */
  interface hl_taskFieldRefs {
    readonly id: FieldRef<"hl_task", 'Int'>
    readonly project_id: FieldRef<"hl_task", 'Int'>
    readonly annotator_task_id: FieldRef<"hl_task", 'Int'>
    readonly name: FieldRef<"hl_task", 'String'>
    readonly desc: FieldRef<"hl_task", 'String'>
    readonly type: FieldRef<"hl_task", 'String'>
    readonly status: FieldRef<"hl_task", 'String'>
    readonly created_at: FieldRef<"hl_task", 'DateTime'>
    readonly updated_at: FieldRef<"hl_task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hl_task findUnique
   */
  export type hl_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_task to fetch.
     */
    where: hl_taskWhereUniqueInput
  }

  /**
   * hl_task findUniqueOrThrow
   */
  export type hl_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_task to fetch.
     */
    where: hl_taskWhereUniqueInput
  }

  /**
   * hl_task findFirst
   */
  export type hl_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_task to fetch.
     */
    where?: hl_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_tasks to fetch.
     */
    orderBy?: hl_taskOrderByWithRelationInput | hl_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_tasks.
     */
    cursor?: hl_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_tasks.
     */
    distinct?: Hl_taskScalarFieldEnum | Hl_taskScalarFieldEnum[]
  }

  /**
   * hl_task findFirstOrThrow
   */
  export type hl_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_task to fetch.
     */
    where?: hl_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_tasks to fetch.
     */
    orderBy?: hl_taskOrderByWithRelationInput | hl_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hl_tasks.
     */
    cursor?: hl_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hl_tasks.
     */
    distinct?: Hl_taskScalarFieldEnum | Hl_taskScalarFieldEnum[]
  }

  /**
   * hl_task findMany
   */
  export type hl_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * Filter, which hl_tasks to fetch.
     */
    where?: hl_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hl_tasks to fetch.
     */
    orderBy?: hl_taskOrderByWithRelationInput | hl_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hl_tasks.
     */
    cursor?: hl_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hl_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hl_tasks.
     */
    skip?: number
    distinct?: Hl_taskScalarFieldEnum | Hl_taskScalarFieldEnum[]
  }

  /**
   * hl_task create
   */
  export type hl_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * The data needed to create a hl_task.
     */
    data: XOR<hl_taskCreateInput, hl_taskUncheckedCreateInput>
  }

  /**
   * hl_task createMany
   */
  export type hl_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hl_tasks.
     */
    data: hl_taskCreateManyInput | hl_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_task createManyAndReturn
   */
  export type hl_taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * The data used to create many hl_tasks.
     */
    data: hl_taskCreateManyInput | hl_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hl_task update
   */
  export type hl_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * The data needed to update a hl_task.
     */
    data: XOR<hl_taskUpdateInput, hl_taskUncheckedUpdateInput>
    /**
     * Choose, which hl_task to update.
     */
    where: hl_taskWhereUniqueInput
  }

  /**
   * hl_task updateMany
   */
  export type hl_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hl_tasks.
     */
    data: XOR<hl_taskUpdateManyMutationInput, hl_taskUncheckedUpdateManyInput>
    /**
     * Filter which hl_tasks to update
     */
    where?: hl_taskWhereInput
    /**
     * Limit how many hl_tasks to update.
     */
    limit?: number
  }

  /**
   * hl_task updateManyAndReturn
   */
  export type hl_taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * The data used to update hl_tasks.
     */
    data: XOR<hl_taskUpdateManyMutationInput, hl_taskUncheckedUpdateManyInput>
    /**
     * Filter which hl_tasks to update
     */
    where?: hl_taskWhereInput
    /**
     * Limit how many hl_tasks to update.
     */
    limit?: number
  }

  /**
   * hl_task upsert
   */
  export type hl_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * The filter to search for the hl_task to update in case it exists.
     */
    where: hl_taskWhereUniqueInput
    /**
     * In case the hl_task found by the `where` argument doesn't exist, create a new hl_task with this data.
     */
    create: XOR<hl_taskCreateInput, hl_taskUncheckedCreateInput>
    /**
     * In case the hl_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hl_taskUpdateInput, hl_taskUncheckedUpdateInput>
  }

  /**
   * hl_task delete
   */
  export type hl_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
    /**
     * Filter which hl_task to delete.
     */
    where: hl_taskWhereUniqueInput
  }

  /**
   * hl_task deleteMany
   */
  export type hl_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hl_tasks to delete
     */
    where?: hl_taskWhereInput
    /**
     * Limit how many hl_tasks to delete.
     */
    limit?: number
  }

  /**
   * hl_task without action
   */
  export type hl_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hl_task
     */
    select?: hl_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hl_task
     */
    omit?: hl_taskOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Hl_userScalarFieldEnum: {
    id: 'id',
    platform_user_id: 'platform_user_id',
    name: 'name',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hl_userScalarFieldEnum = (typeof Hl_userScalarFieldEnum)[keyof typeof Hl_userScalarFieldEnum]


  export const Hl_user_project_roleScalarFieldEnum: {
    id: 'id',
    platform_user_id: 'platform_user_id',
    project_id: 'project_id',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hl_user_project_roleScalarFieldEnum = (typeof Hl_user_project_roleScalarFieldEnum)[keyof typeof Hl_user_project_roleScalarFieldEnum]


  export const Hl_projectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    annotator_project_id: 'annotator_project_id',
    stage_order: 'stage_order',
    current_stage: 'current_stage',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hl_projectScalarFieldEnum = (typeof Hl_projectScalarFieldEnum)[keyof typeof Hl_projectScalarFieldEnum]


  export const Project_pipeline_stageScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    name: 'name',
    desc: 'desc',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Project_pipeline_stageScalarFieldEnum = (typeof Project_pipeline_stageScalarFieldEnum)[keyof typeof Project_pipeline_stageScalarFieldEnum]


  export const Hl_user_taskScalarFieldEnum: {
    id: 'id',
    platform_user_id: 'platform_user_id',
    task_id: 'task_id',
    assigned_at: 'assigned_at',
    task_expiry: 'task_expiry',
    completed_at: 'completed_at'
  };

  export type Hl_user_taskScalarFieldEnum = (typeof Hl_user_taskScalarFieldEnum)[keyof typeof Hl_user_taskScalarFieldEnum]


  export const Hl_taskScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    annotator_task_id: 'annotator_task_id',
    name: 'name',
    desc: 'desc',
    type: 'type',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hl_taskScalarFieldEnum = (typeof Hl_taskScalarFieldEnum)[keyof typeof Hl_taskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type hl_userWhereInput = {
    AND?: hl_userWhereInput | hl_userWhereInput[]
    OR?: hl_userWhereInput[]
    NOT?: hl_userWhereInput | hl_userWhereInput[]
    id?: IntFilter<"hl_user"> | number
    platform_user_id?: IntFilter<"hl_user"> | number
    name?: StringFilter<"hl_user"> | string
    email?: StringFilter<"hl_user"> | string
    created_at?: DateTimeFilter<"hl_user"> | Date | string
    updated_at?: DateTimeFilter<"hl_user"> | Date | string
  }

  export type hl_userOrderByWithRelationInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hl_userWhereInput | hl_userWhereInput[]
    OR?: hl_userWhereInput[]
    NOT?: hl_userWhereInput | hl_userWhereInput[]
    platform_user_id?: IntFilter<"hl_user"> | number
    name?: StringFilter<"hl_user"> | string
    email?: StringFilter<"hl_user"> | string
    created_at?: DateTimeFilter<"hl_user"> | Date | string
    updated_at?: DateTimeFilter<"hl_user"> | Date | string
  }, "id">

  export type hl_userOrderByWithAggregationInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hl_userCountOrderByAggregateInput
    _avg?: hl_userAvgOrderByAggregateInput
    _max?: hl_userMaxOrderByAggregateInput
    _min?: hl_userMinOrderByAggregateInput
    _sum?: hl_userSumOrderByAggregateInput
  }

  export type hl_userScalarWhereWithAggregatesInput = {
    AND?: hl_userScalarWhereWithAggregatesInput | hl_userScalarWhereWithAggregatesInput[]
    OR?: hl_userScalarWhereWithAggregatesInput[]
    NOT?: hl_userScalarWhereWithAggregatesInput | hl_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hl_user"> | number
    platform_user_id?: IntWithAggregatesFilter<"hl_user"> | number
    name?: StringWithAggregatesFilter<"hl_user"> | string
    email?: StringWithAggregatesFilter<"hl_user"> | string
    created_at?: DateTimeWithAggregatesFilter<"hl_user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"hl_user"> | Date | string
  }

  export type hl_user_project_roleWhereInput = {
    AND?: hl_user_project_roleWhereInput | hl_user_project_roleWhereInput[]
    OR?: hl_user_project_roleWhereInput[]
    NOT?: hl_user_project_roleWhereInput | hl_user_project_roleWhereInput[]
    id?: IntFilter<"hl_user_project_role"> | number
    platform_user_id?: IntFilter<"hl_user_project_role"> | number
    project_id?: IntFilter<"hl_user_project_role"> | number
    role?: StringFilter<"hl_user_project_role"> | string
    created_at?: DateTimeFilter<"hl_user_project_role"> | Date | string
    updated_at?: DateTimeFilter<"hl_user_project_role"> | Date | string
  }

  export type hl_user_project_roleOrderByWithRelationInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_user_project_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hl_user_project_roleWhereInput | hl_user_project_roleWhereInput[]
    OR?: hl_user_project_roleWhereInput[]
    NOT?: hl_user_project_roleWhereInput | hl_user_project_roleWhereInput[]
    platform_user_id?: IntFilter<"hl_user_project_role"> | number
    project_id?: IntFilter<"hl_user_project_role"> | number
    role?: StringFilter<"hl_user_project_role"> | string
    created_at?: DateTimeFilter<"hl_user_project_role"> | Date | string
    updated_at?: DateTimeFilter<"hl_user_project_role"> | Date | string
  }, "id">

  export type hl_user_project_roleOrderByWithAggregationInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hl_user_project_roleCountOrderByAggregateInput
    _avg?: hl_user_project_roleAvgOrderByAggregateInput
    _max?: hl_user_project_roleMaxOrderByAggregateInput
    _min?: hl_user_project_roleMinOrderByAggregateInput
    _sum?: hl_user_project_roleSumOrderByAggregateInput
  }

  export type hl_user_project_roleScalarWhereWithAggregatesInput = {
    AND?: hl_user_project_roleScalarWhereWithAggregatesInput | hl_user_project_roleScalarWhereWithAggregatesInput[]
    OR?: hl_user_project_roleScalarWhereWithAggregatesInput[]
    NOT?: hl_user_project_roleScalarWhereWithAggregatesInput | hl_user_project_roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hl_user_project_role"> | number
    platform_user_id?: IntWithAggregatesFilter<"hl_user_project_role"> | number
    project_id?: IntWithAggregatesFilter<"hl_user_project_role"> | number
    role?: StringWithAggregatesFilter<"hl_user_project_role"> | string
    created_at?: DateTimeWithAggregatesFilter<"hl_user_project_role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"hl_user_project_role"> | Date | string
  }

  export type hl_projectWhereInput = {
    AND?: hl_projectWhereInput | hl_projectWhereInput[]
    OR?: hl_projectWhereInput[]
    NOT?: hl_projectWhereInput | hl_projectWhereInput[]
    id?: IntFilter<"hl_project"> | number
    name?: StringFilter<"hl_project"> | string
    desc?: StringFilter<"hl_project"> | string
    annotator_project_id?: IntFilter<"hl_project"> | number
    stage_order?: StringFilter<"hl_project"> | string
    current_stage?: StringFilter<"hl_project"> | string
    created_at?: DateTimeFilter<"hl_project"> | Date | string
    updated_at?: DateTimeFilter<"hl_project"> | Date | string
  }

  export type hl_projectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    annotator_project_id?: SortOrder
    stage_order?: SortOrder
    current_stage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hl_projectWhereInput | hl_projectWhereInput[]
    OR?: hl_projectWhereInput[]
    NOT?: hl_projectWhereInput | hl_projectWhereInput[]
    name?: StringFilter<"hl_project"> | string
    desc?: StringFilter<"hl_project"> | string
    annotator_project_id?: IntFilter<"hl_project"> | number
    stage_order?: StringFilter<"hl_project"> | string
    current_stage?: StringFilter<"hl_project"> | string
    created_at?: DateTimeFilter<"hl_project"> | Date | string
    updated_at?: DateTimeFilter<"hl_project"> | Date | string
  }, "id">

  export type hl_projectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    annotator_project_id?: SortOrder
    stage_order?: SortOrder
    current_stage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hl_projectCountOrderByAggregateInput
    _avg?: hl_projectAvgOrderByAggregateInput
    _max?: hl_projectMaxOrderByAggregateInput
    _min?: hl_projectMinOrderByAggregateInput
    _sum?: hl_projectSumOrderByAggregateInput
  }

  export type hl_projectScalarWhereWithAggregatesInput = {
    AND?: hl_projectScalarWhereWithAggregatesInput | hl_projectScalarWhereWithAggregatesInput[]
    OR?: hl_projectScalarWhereWithAggregatesInput[]
    NOT?: hl_projectScalarWhereWithAggregatesInput | hl_projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hl_project"> | number
    name?: StringWithAggregatesFilter<"hl_project"> | string
    desc?: StringWithAggregatesFilter<"hl_project"> | string
    annotator_project_id?: IntWithAggregatesFilter<"hl_project"> | number
    stage_order?: StringWithAggregatesFilter<"hl_project"> | string
    current_stage?: StringWithAggregatesFilter<"hl_project"> | string
    created_at?: DateTimeWithAggregatesFilter<"hl_project"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"hl_project"> | Date | string
  }

  export type project_pipeline_stageWhereInput = {
    AND?: project_pipeline_stageWhereInput | project_pipeline_stageWhereInput[]
    OR?: project_pipeline_stageWhereInput[]
    NOT?: project_pipeline_stageWhereInput | project_pipeline_stageWhereInput[]
    id?: IntFilter<"project_pipeline_stage"> | number
    project_id?: IntFilter<"project_pipeline_stage"> | number
    name?: StringFilter<"project_pipeline_stage"> | string
    desc?: StringFilter<"project_pipeline_stage"> | string
    type?: StringFilter<"project_pipeline_stage"> | string
    created_at?: DateTimeFilter<"project_pipeline_stage"> | Date | string
    updated_at?: DateTimeFilter<"project_pipeline_stage"> | Date | string
  }

  export type project_pipeline_stageOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type project_pipeline_stageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: project_pipeline_stageWhereInput | project_pipeline_stageWhereInput[]
    OR?: project_pipeline_stageWhereInput[]
    NOT?: project_pipeline_stageWhereInput | project_pipeline_stageWhereInput[]
    project_id?: IntFilter<"project_pipeline_stage"> | number
    name?: StringFilter<"project_pipeline_stage"> | string
    desc?: StringFilter<"project_pipeline_stage"> | string
    type?: StringFilter<"project_pipeline_stage"> | string
    created_at?: DateTimeFilter<"project_pipeline_stage"> | Date | string
    updated_at?: DateTimeFilter<"project_pipeline_stage"> | Date | string
  }, "id">

  export type project_pipeline_stageOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: project_pipeline_stageCountOrderByAggregateInput
    _avg?: project_pipeline_stageAvgOrderByAggregateInput
    _max?: project_pipeline_stageMaxOrderByAggregateInput
    _min?: project_pipeline_stageMinOrderByAggregateInput
    _sum?: project_pipeline_stageSumOrderByAggregateInput
  }

  export type project_pipeline_stageScalarWhereWithAggregatesInput = {
    AND?: project_pipeline_stageScalarWhereWithAggregatesInput | project_pipeline_stageScalarWhereWithAggregatesInput[]
    OR?: project_pipeline_stageScalarWhereWithAggregatesInput[]
    NOT?: project_pipeline_stageScalarWhereWithAggregatesInput | project_pipeline_stageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_pipeline_stage"> | number
    project_id?: IntWithAggregatesFilter<"project_pipeline_stage"> | number
    name?: StringWithAggregatesFilter<"project_pipeline_stage"> | string
    desc?: StringWithAggregatesFilter<"project_pipeline_stage"> | string
    type?: StringWithAggregatesFilter<"project_pipeline_stage"> | string
    created_at?: DateTimeWithAggregatesFilter<"project_pipeline_stage"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"project_pipeline_stage"> | Date | string
  }

  export type hl_user_taskWhereInput = {
    AND?: hl_user_taskWhereInput | hl_user_taskWhereInput[]
    OR?: hl_user_taskWhereInput[]
    NOT?: hl_user_taskWhereInput | hl_user_taskWhereInput[]
    id?: IntFilter<"hl_user_task"> | number
    platform_user_id?: IntFilter<"hl_user_task"> | number
    task_id?: IntFilter<"hl_user_task"> | number
    assigned_at?: DateTimeFilter<"hl_user_task"> | Date | string
    task_expiry?: DateTimeNullableFilter<"hl_user_task"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"hl_user_task"> | Date | string | null
  }

  export type hl_user_taskOrderByWithRelationInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
    assigned_at?: SortOrder
    task_expiry?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
  }

  export type hl_user_taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hl_user_taskWhereInput | hl_user_taskWhereInput[]
    OR?: hl_user_taskWhereInput[]
    NOT?: hl_user_taskWhereInput | hl_user_taskWhereInput[]
    platform_user_id?: IntFilter<"hl_user_task"> | number
    task_id?: IntFilter<"hl_user_task"> | number
    assigned_at?: DateTimeFilter<"hl_user_task"> | Date | string
    task_expiry?: DateTimeNullableFilter<"hl_user_task"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"hl_user_task"> | Date | string | null
  }, "id">

  export type hl_user_taskOrderByWithAggregationInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
    assigned_at?: SortOrder
    task_expiry?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: hl_user_taskCountOrderByAggregateInput
    _avg?: hl_user_taskAvgOrderByAggregateInput
    _max?: hl_user_taskMaxOrderByAggregateInput
    _min?: hl_user_taskMinOrderByAggregateInput
    _sum?: hl_user_taskSumOrderByAggregateInput
  }

  export type hl_user_taskScalarWhereWithAggregatesInput = {
    AND?: hl_user_taskScalarWhereWithAggregatesInput | hl_user_taskScalarWhereWithAggregatesInput[]
    OR?: hl_user_taskScalarWhereWithAggregatesInput[]
    NOT?: hl_user_taskScalarWhereWithAggregatesInput | hl_user_taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hl_user_task"> | number
    platform_user_id?: IntWithAggregatesFilter<"hl_user_task"> | number
    task_id?: IntWithAggregatesFilter<"hl_user_task"> | number
    assigned_at?: DateTimeWithAggregatesFilter<"hl_user_task"> | Date | string
    task_expiry?: DateTimeNullableWithAggregatesFilter<"hl_user_task"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"hl_user_task"> | Date | string | null
  }

  export type hl_taskWhereInput = {
    AND?: hl_taskWhereInput | hl_taskWhereInput[]
    OR?: hl_taskWhereInput[]
    NOT?: hl_taskWhereInput | hl_taskWhereInput[]
    id?: IntFilter<"hl_task"> | number
    project_id?: IntFilter<"hl_task"> | number
    annotator_task_id?: IntFilter<"hl_task"> | number
    name?: StringFilter<"hl_task"> | string
    desc?: StringFilter<"hl_task"> | string
    type?: StringFilter<"hl_task"> | string
    status?: StringFilter<"hl_task"> | string
    created_at?: DateTimeFilter<"hl_task"> | Date | string
    updated_at?: DateTimeFilter<"hl_task"> | Date | string
  }

  export type hl_taskOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_taskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hl_taskWhereInput | hl_taskWhereInput[]
    OR?: hl_taskWhereInput[]
    NOT?: hl_taskWhereInput | hl_taskWhereInput[]
    project_id?: IntFilter<"hl_task"> | number
    annotator_task_id?: IntFilter<"hl_task"> | number
    name?: StringFilter<"hl_task"> | string
    desc?: StringFilter<"hl_task"> | string
    type?: StringFilter<"hl_task"> | string
    status?: StringFilter<"hl_task"> | string
    created_at?: DateTimeFilter<"hl_task"> | Date | string
    updated_at?: DateTimeFilter<"hl_task"> | Date | string
  }, "id">

  export type hl_taskOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hl_taskCountOrderByAggregateInput
    _avg?: hl_taskAvgOrderByAggregateInput
    _max?: hl_taskMaxOrderByAggregateInput
    _min?: hl_taskMinOrderByAggregateInput
    _sum?: hl_taskSumOrderByAggregateInput
  }

  export type hl_taskScalarWhereWithAggregatesInput = {
    AND?: hl_taskScalarWhereWithAggregatesInput | hl_taskScalarWhereWithAggregatesInput[]
    OR?: hl_taskScalarWhereWithAggregatesInput[]
    NOT?: hl_taskScalarWhereWithAggregatesInput | hl_taskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hl_task"> | number
    project_id?: IntWithAggregatesFilter<"hl_task"> | number
    annotator_task_id?: IntWithAggregatesFilter<"hl_task"> | number
    name?: StringWithAggregatesFilter<"hl_task"> | string
    desc?: StringWithAggregatesFilter<"hl_task"> | string
    type?: StringWithAggregatesFilter<"hl_task"> | string
    status?: StringWithAggregatesFilter<"hl_task"> | string
    created_at?: DateTimeWithAggregatesFilter<"hl_task"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"hl_task"> | Date | string
  }

  export type hl_userCreateInput = {
    platform_user_id: number
    name: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_userUncheckedCreateInput = {
    id?: number
    platform_user_id: number
    name: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_userUpdateInput = {
    platform_user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_userCreateManyInput = {
    id?: number
    platform_user_id: number
    name: string
    email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_userUpdateManyMutationInput = {
    platform_user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_user_project_roleCreateInput = {
    platform_user_id: number
    project_id: number
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_user_project_roleUncheckedCreateInput = {
    id?: number
    platform_user_id: number
    project_id: number
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_user_project_roleUpdateInput = {
    platform_user_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_user_project_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_user_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_user_project_roleCreateManyInput = {
    id?: number
    platform_user_id: number
    project_id: number
    role: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_user_project_roleUpdateManyMutationInput = {
    platform_user_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_user_project_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_user_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_projectCreateInput = {
    name: string
    desc: string
    annotator_project_id: number
    stage_order: string
    current_stage: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_projectUncheckedCreateInput = {
    id?: number
    name: string
    desc: string
    annotator_project_id: number
    stage_order: string
    current_stage: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_projectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    annotator_project_id?: IntFieldUpdateOperationsInput | number
    stage_order?: StringFieldUpdateOperationsInput | string
    current_stage?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    annotator_project_id?: IntFieldUpdateOperationsInput | number
    stage_order?: StringFieldUpdateOperationsInput | string
    current_stage?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_projectCreateManyInput = {
    id?: number
    name: string
    desc: string
    annotator_project_id: number
    stage_order: string
    current_stage: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_projectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    annotator_project_id?: IntFieldUpdateOperationsInput | number
    stage_order?: StringFieldUpdateOperationsInput | string
    current_stage?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    annotator_project_id?: IntFieldUpdateOperationsInput | number
    stage_order?: StringFieldUpdateOperationsInput | string
    current_stage?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_pipeline_stageCreateInput = {
    project_id: number
    name: string
    desc: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type project_pipeline_stageUncheckedCreateInput = {
    id?: number
    project_id: number
    name: string
    desc: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type project_pipeline_stageUpdateInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_pipeline_stageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_pipeline_stageCreateManyInput = {
    id?: number
    project_id: number
    name: string
    desc: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type project_pipeline_stageUpdateManyMutationInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_pipeline_stageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_user_taskCreateInput = {
    platform_user_id: number
    task_id: number
    assigned_at?: Date | string
    task_expiry?: Date | string | null
    completed_at?: Date | string | null
  }

  export type hl_user_taskUncheckedCreateInput = {
    id?: number
    platform_user_id: number
    task_id: number
    assigned_at?: Date | string
    task_expiry?: Date | string | null
    completed_at?: Date | string | null
  }

  export type hl_user_taskUpdateInput = {
    platform_user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hl_user_taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hl_user_taskCreateManyInput = {
    id?: number
    platform_user_id: number
    task_id: number
    assigned_at?: Date | string
    task_expiry?: Date | string | null
    completed_at?: Date | string | null
  }

  export type hl_user_taskUpdateManyMutationInput = {
    platform_user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hl_user_taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hl_taskCreateInput = {
    project_id: number
    annotator_task_id: number
    name: string
    desc: string
    type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_taskUncheckedCreateInput = {
    id?: number
    project_id: number
    annotator_task_id: number
    name: string
    desc: string
    type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_taskUpdateInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    annotator_task_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_taskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    annotator_task_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_taskCreateManyInput = {
    id?: number
    project_id: number
    annotator_task_id: number
    name: string
    desc: string
    type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hl_taskUpdateManyMutationInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    annotator_task_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hl_taskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    annotator_task_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type hl_userCountOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_userAvgOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
  }

  export type hl_userMaxOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_userMinOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_userSumOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type hl_user_project_roleCountOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_user_project_roleAvgOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
  }

  export type hl_user_project_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_user_project_roleMinOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_user_project_roleSumOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    project_id?: SortOrder
  }

  export type hl_projectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    annotator_project_id?: SortOrder
    stage_order?: SortOrder
    current_stage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_projectAvgOrderByAggregateInput = {
    id?: SortOrder
    annotator_project_id?: SortOrder
  }

  export type hl_projectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    annotator_project_id?: SortOrder
    stage_order?: SortOrder
    current_stage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_projectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    annotator_project_id?: SortOrder
    stage_order?: SortOrder
    current_stage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_projectSumOrderByAggregateInput = {
    id?: SortOrder
    annotator_project_id?: SortOrder
  }

  export type project_pipeline_stageCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type project_pipeline_stageAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type project_pipeline_stageMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type project_pipeline_stageMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type project_pipeline_stageSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type hl_user_taskCountOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
    assigned_at?: SortOrder
    task_expiry?: SortOrder
    completed_at?: SortOrder
  }

  export type hl_user_taskAvgOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
  }

  export type hl_user_taskMaxOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
    assigned_at?: SortOrder
    task_expiry?: SortOrder
    completed_at?: SortOrder
  }

  export type hl_user_taskMinOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
    assigned_at?: SortOrder
    task_expiry?: SortOrder
    completed_at?: SortOrder
  }

  export type hl_user_taskSumOrderByAggregateInput = {
    id?: SortOrder
    platform_user_id?: SortOrder
    task_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type hl_taskCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_taskAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
  }

  export type hl_taskMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_taskMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hl_taskSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    annotator_task_id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}