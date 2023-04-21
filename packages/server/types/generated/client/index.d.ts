
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = {
  id: number
  email: string
  name: string
  password: string
}

/**
 * Model Teacher
 * 
 */
export type Teacher = {
  id: number
  email: string
  name: string
  password: string
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: number
  email: string
  name: string
}

/**
 * Model Project
 * 
 */
export type Project = {
  id: number
  name: string
  description: string
  moduleId: number
  teacherId: number
}

/**
 * Model Module
 * 
 */
export type Module = {
  id: number
  name: string
  teacherId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Teacher: 'Teacher',
    Admin: 'Admin',
    Project: 'Project',
    Module: 'Module'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    modules: number
    projects: number
  }

  export type StudentCountOutputTypeSelect = {
    modules?: boolean
    projects?: boolean
  }

  export type StudentCountOutputTypeGetPayload<S extends boolean | null | undefined | StudentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StudentCountOutputTypeArgs)
    ? StudentCountOutputType 
    : S extends { select: any } & (StudentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StudentCountOutputType ? StudentCountOutputType[P] : never
  } 
      : StudentCountOutputType




  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect | null
  }



  /**
   * Count Type TeacherCountOutputType
   */


  export type TeacherCountOutputType = {
    modules: number
    projects: number
  }

  export type TeacherCountOutputTypeSelect = {
    modules?: boolean
    projects?: boolean
  }

  export type TeacherCountOutputTypeGetPayload<S extends boolean | null | undefined | TeacherCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TeacherCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TeacherCountOutputTypeArgs)
    ? TeacherCountOutputType 
    : S extends { select: any } & (TeacherCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TeacherCountOutputType ? TeacherCountOutputType[P] : never
  } 
      : TeacherCountOutputType




  // Custom InputTypes

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    students: number
  }

  export type ProjectCountOutputTypeSelect = {
    students?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<S extends boolean | null | undefined | ProjectCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProjectCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProjectCountOutputTypeArgs)
    ? ProjectCountOutputType 
    : S extends { select: any } & (ProjectCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
      : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type ModuleCountOutputType
   */


  export type ModuleCountOutputType = {
    Projects: number
    Students: number
  }

  export type ModuleCountOutputTypeSelect = {
    Projects?: boolean
    Students?: boolean
  }

  export type ModuleCountOutputTypeGetPayload<S extends boolean | null | undefined | ModuleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ModuleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ModuleCountOutputTypeArgs)
    ? ModuleCountOutputType 
    : S extends { select: any } & (ModuleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ModuleCountOutputType ? ModuleCountOutputType[P] : never
  } 
      : ModuleCountOutputType




  // Custom InputTypes

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: StudentScalarFieldEnum[]
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    modules?: boolean | Student$modulesArgs
    projects?: boolean | Student$projectsArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }


  export type StudentInclude = {
    modules?: boolean | Student$modulesArgs
    projects?: boolean | Student$projectsArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type StudentGetPayload<S extends boolean | null | undefined | StudentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Student :
    S extends undefined ? never :
    S extends { include: any } & (StudentArgs | StudentFindManyArgs)
    ? Student  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'modules' ? Array < ModuleGetPayload<S['include'][P]>>  :
        P extends 'projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StudentArgs | StudentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'modules' ? Array < ModuleGetPayload<S['select'][P]>>  :
        P extends 'projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Student ? Student[P] : never
  } 
      : Student


  type StudentCountArgs = 
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? Prisma__StudentClient<StudentGetPayload<T>> : Prisma__StudentClient<StudentGetPayload<T> | null, null>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? Prisma__StudentClient<StudentGetPayload<T>> : Prisma__StudentClient<StudentGetPayload<T> | null, null>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs>
    ): Prisma.PrismaPromise<Array<StudentGetPayload<T>>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs>
    ): Prisma__StudentClient<StudentGetPayload<T>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    modules<T extends Student$modulesArgs= {}>(args?: Subset<T, Student$modulesArgs>): Prisma.PrismaPromise<Array<ModuleGetPayload<T>>| Null>;

    projects<T extends Student$projectsArgs= {}>(args?: Subset<T, Student$projectsArgs>): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Student base type for findUnique actions
   */
  export type StudentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUnique
   */
  export interface StudentFindUniqueArgs extends StudentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student base type for findFirst actions
   */
  export type StudentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * Student findFirst
   */
  export interface StudentFindFirstArgs extends StudentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.modules
   */
  export type Student$modulesArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    where?: ModuleWhereInput
    orderBy?: Enumerable<ModuleOrderByWithRelationInput>
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModuleScalarFieldEnum>
  }


  /**
   * Student.projects
   */
  export type Student$projectsArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Student without action
   */
  export type StudentArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
  }



  /**
   * Model Teacher
   */


  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type TeacherAggregateArgs = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs = {
    where?: TeacherWhereInput
    orderBy?: Enumerable<TeacherOrderByWithAggregationInput>
    by: TeacherScalarFieldEnum[]
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }


  export type TeacherGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    modules?: boolean | Teacher$modulesArgs
    projects?: boolean | Teacher$projectsArgs
    _count?: boolean | TeacherCountOutputTypeArgs
  }


  export type TeacherInclude = {
    modules?: boolean | Teacher$modulesArgs
    projects?: boolean | Teacher$projectsArgs
    _count?: boolean | TeacherCountOutputTypeArgs
  }

  export type TeacherGetPayload<S extends boolean | null | undefined | TeacherArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Teacher :
    S extends undefined ? never :
    S extends { include: any } & (TeacherArgs | TeacherFindManyArgs)
    ? Teacher  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'modules' ? Array < ModuleGetPayload<S['include'][P]>>  :
        P extends 'projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? TeacherCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TeacherArgs | TeacherFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'modules' ? Array < ModuleGetPayload<S['select'][P]>>  :
        P extends 'projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends '_count' ? TeacherCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Teacher ? Teacher[P] : never
  } 
      : Teacher


  type TeacherCountArgs = 
    Omit<TeacherFindManyArgs, 'select' | 'include'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeacherFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeacherFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teacher'> extends True ? Prisma__TeacherClient<TeacherGetPayload<T>> : Prisma__TeacherClient<TeacherGetPayload<T> | null, null>

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TeacherFindUniqueOrThrowArgs>
    ): Prisma__TeacherClient<TeacherGetPayload<T>>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeacherFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeacherFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teacher'> extends True ? Prisma__TeacherClient<TeacherGetPayload<T>> : Prisma__TeacherClient<TeacherGetPayload<T> | null, null>

    /**
     * Find the first Teacher that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeacherFindFirstOrThrowArgs>
    ): Prisma__TeacherClient<TeacherGetPayload<T>>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeacherFindManyArgs>(
      args?: SelectSubset<T, TeacherFindManyArgs>
    ): Prisma.PrismaPromise<Array<TeacherGetPayload<T>>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
    **/
    create<T extends TeacherCreateArgs>(
      args: SelectSubset<T, TeacherCreateArgs>
    ): Prisma__TeacherClient<TeacherGetPayload<T>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
    **/
    delete<T extends TeacherDeleteArgs>(
      args: SelectSubset<T, TeacherDeleteArgs>
    ): Prisma__TeacherClient<TeacherGetPayload<T>>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeacherUpdateArgs>(
      args: SelectSubset<T, TeacherUpdateArgs>
    ): Prisma__TeacherClient<TeacherGetPayload<T>>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeacherDeleteManyArgs>(
      args?: SelectSubset<T, TeacherDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeacherUpdateManyArgs>(
      args: SelectSubset<T, TeacherUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
    **/
    upsert<T extends TeacherUpsertArgs>(
      args: SelectSubset<T, TeacherUpsertArgs>
    ): Prisma__TeacherClient<TeacherGetPayload<T>>

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeacherClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    modules<T extends Teacher$modulesArgs= {}>(args?: Subset<T, Teacher$modulesArgs>): Prisma.PrismaPromise<Array<ModuleGetPayload<T>>| Null>;

    projects<T extends Teacher$projectsArgs= {}>(args?: Subset<T, Teacher$projectsArgs>): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Teacher base type for findUnique actions
   */
  export type TeacherFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUnique
   */
  export interface TeacherFindUniqueArgs extends TeacherFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher base type for findFirst actions
   */
  export type TeacherFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: Enumerable<TeacherScalarFieldEnum>
  }

  /**
   * Teacher findFirst
   */
  export interface TeacherFindFirstArgs extends TeacherFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: Enumerable<TeacherScalarFieldEnum>
  }


  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: Enumerable<TeacherScalarFieldEnum>
  }


  /**
   * Teacher create
   */
  export type TeacherCreateArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }


  /**
   * Teacher update
   */
  export type TeacherUpdateArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
  }


  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }


  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
  }


  /**
   * Teacher.modules
   */
  export type Teacher$modulesArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    where?: ModuleWhereInput
    orderBy?: Enumerable<ModuleOrderByWithRelationInput>
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModuleScalarFieldEnum>
  }


  /**
   * Teacher.projects
   */
  export type Teacher$projectsArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Teacher without action
   */
  export type TeacherArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeacherInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: AdminScalarFieldEnum[]
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: number
    email: string
    name: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
  }


  export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin :
    S extends undefined ? never :
    S extends { include: any } & (AdminArgs | AdminFindManyArgs)
    ? Admin 
    : S extends { select: any } & (AdminArgs | AdminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Admin ? Admin[P] : never
  } 
      : Admin


  type AdminCountArgs = 
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): Prisma.PrismaPromise<Array<AdminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    moduleId: number | null
    teacherId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    moduleId: number | null
    teacherId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    moduleId: number | null
    teacherId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    moduleId: number | null
    teacherId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    moduleId: number
    teacherId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    moduleId?: true
    teacherId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    moduleId?: true
    teacherId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    moduleId?: true
    teacherId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    moduleId?: true
    teacherId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    moduleId?: true
    teacherId?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: ProjectScalarFieldEnum[]
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string
    moduleId: number
    teacherId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    moduleId?: boolean
    teacherId?: boolean
    module?: boolean | ModuleArgs
    students?: boolean | Project$studentsArgs
    teacher?: boolean | TeacherArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }


  export type ProjectInclude = {
    module?: boolean | ModuleArgs
    students?: boolean | Project$studentsArgs
    teacher?: boolean | TeacherArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<S extends boolean | null | undefined | ProjectArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Project :
    S extends undefined ? never :
    S extends { include: any } & (ProjectArgs | ProjectFindManyArgs)
    ? Project  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'module' ? ModuleGetPayload<S['include'][P]> :
        P extends 'students' ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends 'teacher' ? TeacherGetPayload<S['include'][P]> :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProjectArgs | ProjectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'module' ? ModuleGetPayload<S['select'][P]> :
        P extends 'students' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends 'teacher' ? TeacherGetPayload<S['select'][P]> :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Project ? Project[P] : never
  } 
      : Project


  type ProjectCountArgs = 
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? Prisma__ProjectClient<ProjectGetPayload<T>> : Prisma__ProjectClient<ProjectGetPayload<T> | null, null>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? Prisma__ProjectClient<ProjectGetPayload<T>> : Prisma__ProjectClient<ProjectGetPayload<T> | null, null>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): Prisma__ProjectClient<ProjectGetPayload<T>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    module<T extends ModuleArgs= {}>(args?: Subset<T, ModuleArgs>): Prisma__ModuleClient<ModuleGetPayload<T> | Null>;

    students<T extends Project$studentsArgs= {}>(args?: Subset<T, Project$studentsArgs>): Prisma.PrismaPromise<Array<StudentGetPayload<T>>| Null>;

    teacher<T extends TeacherArgs= {}>(args?: Subset<T, TeacherArgs>): Prisma__TeacherClient<TeacherGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Project base type for findUnique actions
   */
  export type ProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUnique
   */
  export interface ProjectFindUniqueArgs extends ProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project base type for findFirst actions
   */
  export type ProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * Project findFirst
   */
  export interface ProjectFindFirstArgs extends ProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.students
   */
  export type Project$studentsArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
  }



  /**
   * Model Module
   */


  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    teacherId: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    _all?: true
  }

  export type ModuleAggregateArgs = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: Enumerable<ModuleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs = {
    where?: ModuleWhereInput
    orderBy?: Enumerable<ModuleOrderByWithAggregationInput>
    by: ModuleScalarFieldEnum[]
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }


  export type ModuleGroupByOutputType = {
    id: number
    name: string
    teacherId: number
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect = {
    id?: boolean
    name?: boolean
    teacherId?: boolean
    Projects?: boolean | Module$ProjectsArgs
    Students?: boolean | Module$StudentsArgs
    Teacher?: boolean | TeacherArgs
    _count?: boolean | ModuleCountOutputTypeArgs
  }


  export type ModuleInclude = {
    Projects?: boolean | Module$ProjectsArgs
    Students?: boolean | Module$StudentsArgs
    Teacher?: boolean | TeacherArgs
    _count?: boolean | ModuleCountOutputTypeArgs
  }

  export type ModuleGetPayload<S extends boolean | null | undefined | ModuleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Module :
    S extends undefined ? never :
    S extends { include: any } & (ModuleArgs | ModuleFindManyArgs)
    ? Module  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends 'Students' ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends 'Teacher' ? TeacherGetPayload<S['include'][P]> :
        P extends '_count' ? ModuleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ModuleArgs | ModuleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends 'Students' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends 'Teacher' ? TeacherGetPayload<S['select'][P]> :
        P extends '_count' ? ModuleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Module ? Module[P] : never
  } 
      : Module


  type ModuleCountArgs = 
    Omit<ModuleFindManyArgs, 'select' | 'include'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModuleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModuleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Module'> extends True ? Prisma__ModuleClient<ModuleGetPayload<T>> : Prisma__ModuleClient<ModuleGetPayload<T> | null, null>

    /**
     * Find one Module that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ModuleFindUniqueOrThrowArgs>
    ): Prisma__ModuleClient<ModuleGetPayload<T>>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModuleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModuleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Module'> extends True ? Prisma__ModuleClient<ModuleGetPayload<T>> : Prisma__ModuleClient<ModuleGetPayload<T> | null, null>

    /**
     * Find the first Module that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ModuleFindFirstOrThrowArgs>
    ): Prisma__ModuleClient<ModuleGetPayload<T>>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModuleFindManyArgs>(
      args?: SelectSubset<T, ModuleFindManyArgs>
    ): Prisma.PrismaPromise<Array<ModuleGetPayload<T>>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
    **/
    create<T extends ModuleCreateArgs>(
      args: SelectSubset<T, ModuleCreateArgs>
    ): Prisma__ModuleClient<ModuleGetPayload<T>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
    **/
    delete<T extends ModuleDeleteArgs>(
      args: SelectSubset<T, ModuleDeleteArgs>
    ): Prisma__ModuleClient<ModuleGetPayload<T>>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModuleUpdateArgs>(
      args: SelectSubset<T, ModuleUpdateArgs>
    ): Prisma__ModuleClient<ModuleGetPayload<T>>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModuleDeleteManyArgs>(
      args?: SelectSubset<T, ModuleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModuleUpdateManyArgs>(
      args: SelectSubset<T, ModuleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
    **/
    upsert<T extends ModuleUpsertArgs>(
      args: SelectSubset<T, ModuleUpsertArgs>
    ): Prisma__ModuleClient<ModuleGetPayload<T>>

    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModuleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Projects<T extends Module$ProjectsArgs= {}>(args?: Subset<T, Module$ProjectsArgs>): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    Students<T extends Module$StudentsArgs= {}>(args?: Subset<T, Module$StudentsArgs>): Prisma.PrismaPromise<Array<StudentGetPayload<T>>| Null>;

    Teacher<T extends TeacherArgs= {}>(args?: Subset<T, TeacherArgs>): Prisma__TeacherClient<TeacherGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Module base type for findUnique actions
   */
  export type ModuleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUnique
   */
  export interface ModuleFindUniqueArgs extends ModuleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module base type for findFirst actions
   */
  export type ModuleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: Enumerable<ModuleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: Enumerable<ModuleScalarFieldEnum>
  }

  /**
   * Module findFirst
   */
  export interface ModuleFindFirstArgs extends ModuleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: Enumerable<ModuleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: Enumerable<ModuleScalarFieldEnum>
  }


  /**
   * Module findMany
   */
  export type ModuleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: Enumerable<ModuleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: Enumerable<ModuleScalarFieldEnum>
  }


  /**
   * Module create
   */
  export type ModuleCreateArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }


  /**
   * Module update
   */
  export type ModuleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
  }


  /**
   * Module upsert
   */
  export type ModuleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }


  /**
   * Module delete
   */
  export type ModuleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }


  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
  }


  /**
   * Module.Projects
   */
  export type Module$ProjectsArgs = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude | null
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Module.Students
   */
  export type Module$StudentsArgs = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude | null
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Module without action
   */
  export type ModuleArgs = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModuleInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacherId: 'teacherId'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    moduleId: 'moduleId',
    teacherId: 'teacherId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    modules?: ModuleListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    modules?: ModuleOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type TeacherWhereInput = {
    AND?: Enumerable<TeacherWhereInput>
    OR?: Enumerable<TeacherWhereInput>
    NOT?: Enumerable<TeacherWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    modules?: ModuleListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    modules?: ModuleOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeacherScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeacherScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeacherScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type AdminWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    moduleId?: IntFilter | number
    teacherId?: IntFilter | number
    module?: XOR<ModuleRelationFilter, ModuleWhereInput>
    students?: StudentListRelationFilter
    teacher?: XOR<TeacherRelationFilter, TeacherWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
    module?: ModuleOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = {
    id?: number
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    moduleId?: IntWithAggregatesFilter | number
    teacherId?: IntWithAggregatesFilter | number
  }

  export type ModuleWhereInput = {
    AND?: Enumerable<ModuleWhereInput>
    OR?: Enumerable<ModuleWhereInput>
    NOT?: Enumerable<ModuleWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    teacherId?: IntFilter | number
    Projects?: ProjectListRelationFilter
    Students?: StudentListRelationFilter
    Teacher?: XOR<TeacherRelationFilter, TeacherWhereInput>
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    Projects?: ProjectOrderByRelationAggregateInput
    Students?: StudentOrderByRelationAggregateInput
    Teacher?: TeacherOrderByWithRelationInput
  }

  export type ModuleWhereUniqueInput = {
    id?: number
  }

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModuleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModuleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModuleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    teacherId?: IntWithAggregatesFilter | number
  }

  export type StudentCreateInput = {
    email: string
    name: string
    password: string
    modules?: ModuleCreateNestedManyWithoutStudentsInput
    projects?: ProjectCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    modules?: ModuleUncheckedCreateNestedManyWithoutStudentsInput
    projects?: ProjectUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUpdateManyWithoutStudentsNestedInput
    projects?: ProjectUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUncheckedUpdateManyWithoutStudentsNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    email: string
    name: string
    password: string
    modules?: ModuleCreateNestedManyWithoutTeacherInput
    projects?: ProjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    modules?: ModuleUncheckedCreateNestedManyWithoutTeacherInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUpdateManyWithoutTeacherNestedInput
    projects?: ProjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUncheckedUpdateManyWithoutTeacherNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    email: string
    name: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    name: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    name: string
    description: string
    module: ModuleCreateNestedOneWithoutProjectsInput
    students?: StudentCreateNestedManyWithoutProjectsInput
    teacher: TeacherCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    teacherId: number
    students?: StudentUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    students?: StudentUpdateManyWithoutProjectsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleCreateInput = {
    name: string
    Projects?: ProjectCreateNestedManyWithoutModuleInput
    Students?: StudentCreateNestedManyWithoutModulesInput
    Teacher: TeacherCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: number
    name: string
    teacherId: number
    Projects?: ProjectUncheckedCreateNestedManyWithoutModuleInput
    Students?: StudentUncheckedCreateNestedManyWithoutModulesInput
  }

  export type ModuleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectUpdateManyWithoutModuleNestedInput
    Students?: StudentUpdateManyWithoutModulesNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    Projects?: ProjectUncheckedUpdateManyWithoutModuleNestedInput
    Students?: StudentUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type ModuleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModuleRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type TeacherRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutStudentsInput>, Enumerable<ModuleUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutStudentsInput>, Enumerable<ProjectUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ModuleUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutStudentsInput>, Enumerable<ModuleUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutStudentsInput>, Enumerable<ProjectUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ModuleUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutStudentsInput>, Enumerable<ModuleUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<ModuleUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<ModuleWhereUniqueInput>
    disconnect?: Enumerable<ModuleWhereUniqueInput>
    delete?: Enumerable<ModuleWhereUniqueInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
    update?: Enumerable<ModuleUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<ModuleUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<ModuleScalarWhereInput>
  }

  export type ProjectUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutStudentsInput>, Enumerable<ProjectUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModuleUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutStudentsInput>, Enumerable<ModuleUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<ModuleUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<ModuleWhereUniqueInput>
    disconnect?: Enumerable<ModuleWhereUniqueInput>
    delete?: Enumerable<ModuleWhereUniqueInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
    update?: Enumerable<ModuleUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<ModuleUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<ModuleScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutStudentsInput>, Enumerable<ProjectUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutStudentsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutStudentsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutStudentsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutStudentsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ModuleCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTeacherInput>, Enumerable<ProjectUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTeacherInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ModuleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTeacherInput>, Enumerable<ProjectUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTeacherInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ModuleUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<ModuleUpsertWithWhereUniqueWithoutTeacherInput>
    set?: Enumerable<ModuleWhereUniqueInput>
    disconnect?: Enumerable<ModuleWhereUniqueInput>
    delete?: Enumerable<ModuleWhereUniqueInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
    update?: Enumerable<ModuleUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<ModuleUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<ModuleScalarWhereInput>
  }

  export type ProjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTeacherInput>, Enumerable<ProjectUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutTeacherInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ModuleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<ModuleUpsertWithWhereUniqueWithoutTeacherInput>
    set?: Enumerable<ModuleWhereUniqueInput>
    disconnect?: Enumerable<ModuleWhereUniqueInput>
    delete?: Enumerable<ModuleWhereUniqueInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
    update?: Enumerable<ModuleUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<ModuleUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<ModuleScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutTeacherInput>, Enumerable<ProjectUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutTeacherInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ModuleCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutProjectsInput
    connect?: ModuleWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectsInput>, Enumerable<StudentUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectsInput>
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type TeacherCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeacherCreateWithoutProjectsInput, TeacherUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutProjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectsInput>, Enumerable<StudentUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectsInput>
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type ModuleUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutProjectsInput
    upsert?: ModuleUpsertWithoutProjectsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<ModuleUpdateWithoutProjectsInput, ModuleUncheckedUpdateWithoutProjectsInput>
  }

  export type StudentUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectsInput>, Enumerable<StudentUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutProjectsInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type TeacherUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutProjectsInput, TeacherUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutProjectsInput
    upsert?: TeacherUpsertWithoutProjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<TeacherUpdateWithoutProjectsInput, TeacherUncheckedUpdateWithoutProjectsInput>
  }

  export type StudentUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectsInput>, Enumerable<StudentUncheckedCreateWithoutProjectsInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectsInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutProjectsInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutProjectsInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutProjectsInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type ProjectCreateNestedManyWithoutModuleInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type StudentCreateNestedManyWithoutModulesInput = {
    create?: XOR<Enumerable<StudentCreateWithoutModulesInput>, Enumerable<StudentUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutModulesInput>
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type TeacherCreateNestedOneWithoutModulesInput = {
    create?: XOR<TeacherCreateWithoutModulesInput, TeacherUncheckedCreateWithoutModulesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutModulesInput
    connect?: TeacherWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutModulesInput = {
    create?: XOR<Enumerable<StudentCreateWithoutModulesInput>, Enumerable<StudentUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutModulesInput>
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type ProjectUpdateManyWithoutModuleNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutModuleInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutModuleInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutModuleInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type StudentUpdateManyWithoutModulesNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutModulesInput>, Enumerable<StudentUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutModulesInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutModulesInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutModulesInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutModulesInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type TeacherUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<TeacherCreateWithoutModulesInput, TeacherUncheckedCreateWithoutModulesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutModulesInput
    upsert?: TeacherUpsertWithoutModulesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<TeacherUpdateWithoutModulesInput, TeacherUncheckedUpdateWithoutModulesInput>
  }

  export type ProjectUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutModuleInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutModuleInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutModuleInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutModulesNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutModulesInput>, Enumerable<StudentUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutModulesInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutModulesInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutModulesInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutModulesInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ModuleCreateWithoutStudentsInput = {
    name: string
    Projects?: ProjectCreateNestedManyWithoutModuleInput
    Teacher: TeacherCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    teacherId: number
    Projects?: ProjectUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutStudentsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutStudentsInput, ModuleUncheckedCreateWithoutStudentsInput>
  }

  export type ProjectCreateWithoutStudentsInput = {
    name: string
    description: string
    module: ModuleCreateNestedOneWithoutProjectsInput
    teacher: TeacherCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    teacherId: number
  }

  export type ProjectCreateOrConnectWithoutStudentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
  }

  export type ModuleUpsertWithWhereUniqueWithoutStudentsInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutStudentsInput, ModuleUncheckedUpdateWithoutStudentsInput>
    create: XOR<ModuleCreateWithoutStudentsInput, ModuleUncheckedCreateWithoutStudentsInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutStudentsInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutStudentsInput, ModuleUncheckedUpdateWithoutStudentsInput>
  }

  export type ModuleUpdateManyWithWhereWithoutStudentsInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutModulesInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: Enumerable<ModuleScalarWhereInput>
    OR?: Enumerable<ModuleScalarWhereInput>
    NOT?: Enumerable<ModuleScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    teacherId?: IntFilter | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutStudentsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutStudentsInput, ProjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutStudentsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutStudentsInput, ProjectUncheckedUpdateWithoutStudentsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutStudentsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    moduleId?: IntFilter | number
    teacherId?: IntFilter | number
  }

  export type ModuleCreateWithoutTeacherInput = {
    name: string
    Projects?: ProjectCreateNestedManyWithoutModuleInput
    Students?: StudentCreateNestedManyWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    Projects?: ProjectUncheckedCreateNestedManyWithoutModuleInput
    Students?: StudentUncheckedCreateNestedManyWithoutModulesInput
  }

  export type ModuleCreateOrConnectWithoutTeacherInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutTeacherInput, ModuleUncheckedCreateWithoutTeacherInput>
  }

  export type ProjectCreateWithoutTeacherInput = {
    name: string
    description: string
    module: ModuleCreateNestedOneWithoutProjectsInput
    students?: StudentCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    students?: StudentUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutTeacherInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeacherInput, ProjectUncheckedCreateWithoutTeacherInput>
  }

  export type ModuleUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutTeacherInput, ModuleUncheckedUpdateWithoutTeacherInput>
    create: XOR<ModuleCreateWithoutTeacherInput, ModuleUncheckedCreateWithoutTeacherInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutTeacherInput, ModuleUncheckedUpdateWithoutTeacherInput>
  }

  export type ModuleUpdateManyWithWhereWithoutTeacherInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutModulesInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeacherInput, ProjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<ProjectCreateWithoutTeacherInput, ProjectUncheckedCreateWithoutTeacherInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeacherInput, ProjectUncheckedUpdateWithoutTeacherInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeacherInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ModuleCreateWithoutProjectsInput = {
    name: string
    Students?: StudentCreateNestedManyWithoutModulesInput
    Teacher: TeacherCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    teacherId: number
    Students?: StudentUncheckedCreateNestedManyWithoutModulesInput
  }

  export type ModuleCreateOrConnectWithoutProjectsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
  }

  export type StudentCreateWithoutProjectsInput = {
    email: string
    name: string
    password: string
    modules?: ModuleCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutProjectsInput = {
    id?: number
    email: string
    name: string
    password: string
    modules?: ModuleUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutProjectsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProjectsInput, StudentUncheckedCreateWithoutProjectsInput>
  }

  export type TeacherCreateWithoutProjectsInput = {
    email: string
    name: string
    password: string
    modules?: ModuleCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutProjectsInput = {
    id?: number
    email: string
    name: string
    password: string
    modules?: ModuleUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutProjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutProjectsInput, TeacherUncheckedCreateWithoutProjectsInput>
  }

  export type ModuleUpsertWithoutProjectsInput = {
    update: XOR<ModuleUpdateWithoutProjectsInput, ModuleUncheckedUpdateWithoutProjectsInput>
    create: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
  }

  export type ModuleUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Students?: StudentUpdateManyWithoutModulesNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    Students?: StudentUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutProjectsInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutProjectsInput, StudentUncheckedUpdateWithoutProjectsInput>
    create: XOR<StudentCreateWithoutProjectsInput, StudentUncheckedCreateWithoutProjectsInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutProjectsInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutProjectsInput, StudentUncheckedUpdateWithoutProjectsInput>
  }

  export type StudentUpdateManyWithWhereWithoutProjectsInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: Enumerable<StudentScalarWhereInput>
    OR?: Enumerable<StudentScalarWhereInput>
    NOT?: Enumerable<StudentScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
  }

  export type TeacherUpsertWithoutProjectsInput = {
    update: XOR<TeacherUpdateWithoutProjectsInput, TeacherUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeacherCreateWithoutProjectsInput, TeacherUncheckedCreateWithoutProjectsInput>
  }

  export type TeacherUpdateWithoutProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ProjectCreateWithoutModuleInput = {
    name: string
    description: string
    students?: StudentCreateNestedManyWithoutProjectsInput
    teacher: TeacherCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutModuleInput = {
    id?: number
    name: string
    description: string
    teacherId: number
    students?: StudentUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutModuleInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutModuleInput, ProjectUncheckedCreateWithoutModuleInput>
  }

  export type StudentCreateWithoutModulesInput = {
    email: string
    name: string
    password: string
    projects?: ProjectCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutModulesInput = {
    id?: number
    email: string
    name: string
    password: string
    projects?: ProjectUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutModulesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutModulesInput, StudentUncheckedCreateWithoutModulesInput>
  }

  export type TeacherCreateWithoutModulesInput = {
    email: string
    name: string
    password: string
    projects?: ProjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutModulesInput = {
    id?: number
    email: string
    name: string
    password: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutModulesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutModulesInput, TeacherUncheckedCreateWithoutModulesInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutModuleInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutModuleInput, ProjectUncheckedUpdateWithoutModuleInput>
    create: XOR<ProjectCreateWithoutModuleInput, ProjectUncheckedCreateWithoutModuleInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutModuleInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutModuleInput, ProjectUncheckedUpdateWithoutModuleInput>
  }

  export type ProjectUpdateManyWithWhereWithoutModuleInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutModulesInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutModulesInput, StudentUncheckedUpdateWithoutModulesInput>
    create: XOR<StudentCreateWithoutModulesInput, StudentUncheckedCreateWithoutModulesInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutModulesInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutModulesInput, StudentUncheckedUpdateWithoutModulesInput>
  }

  export type StudentUpdateManyWithWhereWithoutModulesInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type TeacherUpsertWithoutModulesInput = {
    update: XOR<TeacherUpdateWithoutModulesInput, TeacherUncheckedUpdateWithoutModulesInput>
    create: XOR<TeacherCreateWithoutModulesInput, TeacherUncheckedCreateWithoutModulesInput>
  }

  export type TeacherUpdateWithoutModulesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ModuleUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectUpdateManyWithoutModuleNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    Projects?: ProjectUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectUpdateManyWithoutModuleNestedInput
    Students?: StudentUpdateManyWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectUncheckedUpdateManyWithoutModuleNestedInput
    Students?: StudentUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type ProjectUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    students?: StudentUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type StudentUpdateWithoutProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutModuleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutProjectsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type StudentUpdateWithoutModulesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutStudentsNestedInput
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