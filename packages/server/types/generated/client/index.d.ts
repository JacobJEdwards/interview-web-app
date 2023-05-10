
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
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  name: string
  role: Role
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
  filePath: string | null
  dateSet: Date
  dateDue: Date
}

/**
 * Model StudentSubmission
 * 
 */
export type StudentSubmission = {
  id: number
  studentId: number
  projectId: number
  filePath: string
  dateSubmitted: Date
}

/**
 * Model File
 * 
 */
export type File = {
  id: number
  name: string
  filePath: string
  projectId: number | null
  submissionId: number | null
  extension: string
}

/**
 * Model Module
 * 
 */
export type Module = {
  id: number
  name: string
  description: string
  teacherId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

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
   * `prisma.studentSubmission`: Exposes CRUD operations for the **StudentSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSubmissions
    * const studentSubmissions = await prisma.studentSubmission.findMany()
    * ```
    */
  get studentSubmission(): Prisma.StudentSubmissionDelegate<GlobalReject>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<GlobalReject>;

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
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
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
    User: 'User',
    Admin: 'Admin',
    Project: 'Project',
    StudentSubmission: 'StudentSubmission',
    File: 'File',
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    ownedModules: number
    modules: number
    StudentSubmission: number
    studentProjects: number
  }

  export type UserCountOutputTypeSelect = {
    ownedModules?: boolean
    modules?: boolean
    StudentSubmission?: boolean
    studentProjects?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    students: number
    StudentSubmission: number
    File: number
  }

  export type ProjectCountOutputTypeSelect = {
    students?: boolean
    StudentSubmission?: boolean
    File?: boolean
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
   * Count Type StudentSubmissionCountOutputType
   */


  export type StudentSubmissionCountOutputType = {
    File: number
  }

  export type StudentSubmissionCountOutputTypeSelect = {
    File?: boolean
  }

  export type StudentSubmissionCountOutputTypeGetPayload<S extends boolean | null | undefined | StudentSubmissionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentSubmissionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StudentSubmissionCountOutputTypeArgs)
    ? StudentSubmissionCountOutputType 
    : S extends { select: any } & (StudentSubmissionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StudentSubmissionCountOutputType ? StudentSubmissionCountOutputType[P] : never
  } 
      : StudentSubmissionCountOutputType




  // Custom InputTypes

  /**
   * StudentSubmissionCountOutputType without action
   */
  export type StudentSubmissionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmissionCountOutputType
     */
    select?: StudentSubmissionCountOutputTypeSelect | null
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
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: Role | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: Role | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    role: Role
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    ownedModules?: boolean | User$ownedModulesArgs
    modules?: boolean | User$modulesArgs
    StudentSubmission?: boolean | User$StudentSubmissionArgs
    studentProjects?: boolean | User$studentProjectsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    ownedModules?: boolean | User$ownedModulesArgs
    modules?: boolean | User$modulesArgs
    StudentSubmission?: boolean | User$StudentSubmissionArgs
    studentProjects?: boolean | User$studentProjectsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ownedModules' ? Array < ModuleGetPayload<S['include'][P]>>  :
        P extends 'modules' ? Array < ModuleGetPayload<S['include'][P]>>  :
        P extends 'StudentSubmission' ? Array < StudentSubmissionGetPayload<S['include'][P]>>  :
        P extends 'studentProjects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ownedModules' ? Array < ModuleGetPayload<S['select'][P]>>  :
        P extends 'modules' ? Array < ModuleGetPayload<S['select'][P]>>  :
        P extends 'StudentSubmission' ? Array < StudentSubmissionGetPayload<S['select'][P]>>  :
        P extends 'studentProjects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    ownedModules<T extends User$ownedModulesArgs= {}>(args?: Subset<T, User$ownedModulesArgs>): Prisma.PrismaPromise<Array<ModuleGetPayload<T>>| Null>;

    modules<T extends User$modulesArgs= {}>(args?: Subset<T, User$modulesArgs>): Prisma.PrismaPromise<Array<ModuleGetPayload<T>>| Null>;

    StudentSubmission<T extends User$StudentSubmissionArgs= {}>(args?: Subset<T, User$StudentSubmissionArgs>): Prisma.PrismaPromise<Array<StudentSubmissionGetPayload<T>>| Null>;

    studentProjects<T extends User$studentProjectsArgs= {}>(args?: Subset<T, User$studentProjectsArgs>): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.ownedModules
   */
  export type User$ownedModulesArgs = {
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
   * User.modules
   */
  export type User$modulesArgs = {
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
   * User.StudentSubmission
   */
  export type User$StudentSubmissionArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    where?: StudentSubmissionWhereInput
    orderBy?: Enumerable<StudentSubmissionOrderByWithRelationInput>
    cursor?: StudentSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentSubmissionScalarFieldEnum>
  }


  /**
   * User.studentProjects
   */
  export type User$studentProjectsArgs = {
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
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     */
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
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
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    moduleId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    moduleId: number | null
    filePath: string | null
    dateSet: Date | null
    dateDue: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    moduleId: number | null
    filePath: string | null
    dateSet: Date | null
    dateDue: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    moduleId: number
    filePath: number
    dateSet: number
    dateDue: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    moduleId?: true
    filePath?: true
    dateSet?: true
    dateDue?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    moduleId?: true
    filePath?: true
    dateSet?: true
    dateDue?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    moduleId?: true
    filePath?: true
    dateSet?: true
    dateDue?: true
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
    filePath: string | null
    dateSet: Date
    dateDue: Date
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
    filePath?: boolean
    dateSet?: boolean
    dateDue?: boolean
    module?: boolean | ModuleArgs
    students?: boolean | Project$studentsArgs
    StudentSubmission?: boolean | Project$StudentSubmissionArgs
    File?: boolean | Project$FileArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }


  export type ProjectInclude = {
    module?: boolean | ModuleArgs
    students?: boolean | Project$studentsArgs
    StudentSubmission?: boolean | Project$StudentSubmissionArgs
    File?: boolean | Project$FileArgs
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
        P extends 'students' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'StudentSubmission' ? Array < StudentSubmissionGetPayload<S['include'][P]>>  :
        P extends 'File' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProjectArgs | ProjectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'module' ? ModuleGetPayload<S['select'][P]> :
        P extends 'students' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'StudentSubmission' ? Array < StudentSubmissionGetPayload<S['select'][P]>>  :
        P extends 'File' ? Array < FileGetPayload<S['select'][P]>>  :
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
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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

    students<T extends Project$studentsArgs= {}>(args?: Subset<T, Project$studentsArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    StudentSubmission<T extends Project$StudentSubmissionArgs= {}>(args?: Subset<T, Project$StudentSubmissionArgs>): Prisma.PrismaPromise<Array<StudentSubmissionGetPayload<T>>| Null>;

    File<T extends Project$FileArgs= {}>(args?: Subset<T, Project$FileArgs>): Prisma.PrismaPromise<Array<FileGetPayload<T>>| Null>;

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
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     */
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
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
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Project.StudentSubmission
   */
  export type Project$StudentSubmissionArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    where?: StudentSubmissionWhereInput
    orderBy?: Enumerable<StudentSubmissionOrderByWithRelationInput>
    cursor?: StudentSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentSubmissionScalarFieldEnum>
  }


  /**
   * Project.File
   */
  export type Project$FileArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
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
   * Model StudentSubmission
   */


  export type AggregateStudentSubmission = {
    _count: StudentSubmissionCountAggregateOutputType | null
    _avg: StudentSubmissionAvgAggregateOutputType | null
    _sum: StudentSubmissionSumAggregateOutputType | null
    _min: StudentSubmissionMinAggregateOutputType | null
    _max: StudentSubmissionMaxAggregateOutputType | null
  }

  export type StudentSubmissionAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    projectId: number | null
  }

  export type StudentSubmissionSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    projectId: number | null
  }

  export type StudentSubmissionMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    projectId: number | null
    filePath: string | null
    dateSubmitted: Date | null
  }

  export type StudentSubmissionMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    projectId: number | null
    filePath: string | null
    dateSubmitted: Date | null
  }

  export type StudentSubmissionCountAggregateOutputType = {
    id: number
    studentId: number
    projectId: number
    filePath: number
    dateSubmitted: number
    _all: number
  }


  export type StudentSubmissionAvgAggregateInputType = {
    id?: true
    studentId?: true
    projectId?: true
  }

  export type StudentSubmissionSumAggregateInputType = {
    id?: true
    studentId?: true
    projectId?: true
  }

  export type StudentSubmissionMinAggregateInputType = {
    id?: true
    studentId?: true
    projectId?: true
    filePath?: true
    dateSubmitted?: true
  }

  export type StudentSubmissionMaxAggregateInputType = {
    id?: true
    studentId?: true
    projectId?: true
    filePath?: true
    dateSubmitted?: true
  }

  export type StudentSubmissionCountAggregateInputType = {
    id?: true
    studentId?: true
    projectId?: true
    filePath?: true
    dateSubmitted?: true
    _all?: true
  }

  export type StudentSubmissionAggregateArgs = {
    /**
     * Filter which StudentSubmission to aggregate.
     */
    where?: StudentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubmissions to fetch.
     */
    orderBy?: Enumerable<StudentSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSubmissions
    **/
    _count?: true | StudentSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSubmissionMaxAggregateInputType
  }

  export type GetStudentSubmissionAggregateType<T extends StudentSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSubmission[P]>
      : GetScalarType<T[P], AggregateStudentSubmission[P]>
  }




  export type StudentSubmissionGroupByArgs = {
    where?: StudentSubmissionWhereInput
    orderBy?: Enumerable<StudentSubmissionOrderByWithAggregationInput>
    by: StudentSubmissionScalarFieldEnum[]
    having?: StudentSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSubmissionCountAggregateInputType | true
    _avg?: StudentSubmissionAvgAggregateInputType
    _sum?: StudentSubmissionSumAggregateInputType
    _min?: StudentSubmissionMinAggregateInputType
    _max?: StudentSubmissionMaxAggregateInputType
  }


  export type StudentSubmissionGroupByOutputType = {
    id: number
    studentId: number
    projectId: number
    filePath: string
    dateSubmitted: Date
    _count: StudentSubmissionCountAggregateOutputType | null
    _avg: StudentSubmissionAvgAggregateOutputType | null
    _sum: StudentSubmissionSumAggregateOutputType | null
    _min: StudentSubmissionMinAggregateOutputType | null
    _max: StudentSubmissionMaxAggregateOutputType | null
  }

  type GetStudentSubmissionGroupByPayload<T extends StudentSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StudentSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type StudentSubmissionSelect = {
    id?: boolean
    studentId?: boolean
    projectId?: boolean
    filePath?: boolean
    dateSubmitted?: boolean
    student?: boolean | UserArgs
    project?: boolean | ProjectArgs
    File?: boolean | StudentSubmission$FileArgs
    _count?: boolean | StudentSubmissionCountOutputTypeArgs
  }


  export type StudentSubmissionInclude = {
    student?: boolean | UserArgs
    project?: boolean | ProjectArgs
    File?: boolean | StudentSubmission$FileArgs
    _count?: boolean | StudentSubmissionCountOutputTypeArgs
  }

  export type StudentSubmissionGetPayload<S extends boolean | null | undefined | StudentSubmissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentSubmission :
    S extends undefined ? never :
    S extends { include: any } & (StudentSubmissionArgs | StudentSubmissionFindManyArgs)
    ? StudentSubmission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'student' ? UserGetPayload<S['include'][P]> :
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'File' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentSubmissionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StudentSubmissionArgs | StudentSubmissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'student' ? UserGetPayload<S['select'][P]> :
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'File' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentSubmissionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof StudentSubmission ? StudentSubmission[P] : never
  } 
      : StudentSubmission


  type StudentSubmissionCountArgs = 
    Omit<StudentSubmissionFindManyArgs, 'select' | 'include'> & {
      select?: StudentSubmissionCountAggregateInputType | true
    }

  export interface StudentSubmissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one StudentSubmission that matches the filter.
     * @param {StudentSubmissionFindUniqueArgs} args - Arguments to find a StudentSubmission
     * @example
     * // Get one StudentSubmission
     * const studentSubmission = await prisma.studentSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentSubmissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentSubmissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StudentSubmission'> extends True ? Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>> : Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T> | null, null>

    /**
     * Find one StudentSubmission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentSubmissionFindUniqueOrThrowArgs} args - Arguments to find a StudentSubmission
     * @example
     * // Get one StudentSubmission
     * const studentSubmission = await prisma.studentSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentSubmissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentSubmissionFindUniqueOrThrowArgs>
    ): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>>

    /**
     * Find the first StudentSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionFindFirstArgs} args - Arguments to find a StudentSubmission
     * @example
     * // Get one StudentSubmission
     * const studentSubmission = await prisma.studentSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentSubmissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentSubmissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StudentSubmission'> extends True ? Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>> : Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T> | null, null>

    /**
     * Find the first StudentSubmission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionFindFirstOrThrowArgs} args - Arguments to find a StudentSubmission
     * @example
     * // Get one StudentSubmission
     * const studentSubmission = await prisma.studentSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentSubmissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentSubmissionFindFirstOrThrowArgs>
    ): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>>

    /**
     * Find zero or more StudentSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSubmissions
     * const studentSubmissions = await prisma.studentSubmission.findMany()
     * 
     * // Get first 10 StudentSubmissions
     * const studentSubmissions = await prisma.studentSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSubmissionWithIdOnly = await prisma.studentSubmission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentSubmissionFindManyArgs>(
      args?: SelectSubset<T, StudentSubmissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<StudentSubmissionGetPayload<T>>>

    /**
     * Create a StudentSubmission.
     * @param {StudentSubmissionCreateArgs} args - Arguments to create a StudentSubmission.
     * @example
     * // Create one StudentSubmission
     * const StudentSubmission = await prisma.studentSubmission.create({
     *   data: {
     *     // ... data to create a StudentSubmission
     *   }
     * })
     * 
    **/
    create<T extends StudentSubmissionCreateArgs>(
      args: SelectSubset<T, StudentSubmissionCreateArgs>
    ): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>>

    /**
     * Create many StudentSubmissions.
     *     @param {StudentSubmissionCreateManyArgs} args - Arguments to create many StudentSubmissions.
     *     @example
     *     // Create many StudentSubmissions
     *     const studentSubmission = await prisma.studentSubmission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentSubmissionCreateManyArgs>(
      args?: SelectSubset<T, StudentSubmissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentSubmission.
     * @param {StudentSubmissionDeleteArgs} args - Arguments to delete one StudentSubmission.
     * @example
     * // Delete one StudentSubmission
     * const StudentSubmission = await prisma.studentSubmission.delete({
     *   where: {
     *     // ... filter to delete one StudentSubmission
     *   }
     * })
     * 
    **/
    delete<T extends StudentSubmissionDeleteArgs>(
      args: SelectSubset<T, StudentSubmissionDeleteArgs>
    ): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>>

    /**
     * Update one StudentSubmission.
     * @param {StudentSubmissionUpdateArgs} args - Arguments to update one StudentSubmission.
     * @example
     * // Update one StudentSubmission
     * const studentSubmission = await prisma.studentSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentSubmissionUpdateArgs>(
      args: SelectSubset<T, StudentSubmissionUpdateArgs>
    ): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>>

    /**
     * Delete zero or more StudentSubmissions.
     * @param {StudentSubmissionDeleteManyArgs} args - Arguments to filter StudentSubmissions to delete.
     * @example
     * // Delete a few StudentSubmissions
     * const { count } = await prisma.studentSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentSubmissionDeleteManyArgs>(
      args?: SelectSubset<T, StudentSubmissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSubmissions
     * const studentSubmission = await prisma.studentSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentSubmissionUpdateManyArgs>(
      args: SelectSubset<T, StudentSubmissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentSubmission.
     * @param {StudentSubmissionUpsertArgs} args - Arguments to update or create a StudentSubmission.
     * @example
     * // Update or create a StudentSubmission
     * const studentSubmission = await prisma.studentSubmission.upsert({
     *   create: {
     *     // ... data to create a StudentSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSubmission we want to update
     *   }
     * })
    **/
    upsert<T extends StudentSubmissionUpsertArgs>(
      args: SelectSubset<T, StudentSubmissionUpsertArgs>
    ): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T>>

    /**
     * Count the number of StudentSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionCountArgs} args - Arguments to filter StudentSubmissions to count.
     * @example
     * // Count the number of StudentSubmissions
     * const count = await prisma.studentSubmission.count({
     *   where: {
     *     // ... the filter for the StudentSubmissions we want to count
     *   }
     * })
    **/
    count<T extends StudentSubmissionCountArgs>(
      args?: Subset<T, StudentSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentSubmissionAggregateArgs>(args: Subset<T, StudentSubmissionAggregateArgs>): Prisma.PrismaPromise<GetStudentSubmissionAggregateType<T>>

    /**
     * Group by StudentSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubmissionGroupByArgs} args - Group by arguments.
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
      T extends StudentSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: StudentSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentSubmissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    student<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    File<T extends StudentSubmission$FileArgs= {}>(args?: Subset<T, StudentSubmission$FileArgs>): Prisma.PrismaPromise<Array<FileGetPayload<T>>| Null>;

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
   * StudentSubmission base type for findUnique actions
   */
  export type StudentSubmissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * Filter, which StudentSubmission to fetch.
     */
    where: StudentSubmissionWhereUniqueInput
  }

  /**
   * StudentSubmission findUnique
   */
  export interface StudentSubmissionFindUniqueArgs extends StudentSubmissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentSubmission findUniqueOrThrow
   */
  export type StudentSubmissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * Filter, which StudentSubmission to fetch.
     */
    where: StudentSubmissionWhereUniqueInput
  }


  /**
   * StudentSubmission base type for findFirst actions
   */
  export type StudentSubmissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * Filter, which StudentSubmission to fetch.
     */
    where?: StudentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubmissions to fetch.
     */
    orderBy?: Enumerable<StudentSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubmissions.
     */
    cursor?: StudentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubmissions.
     */
    distinct?: Enumerable<StudentSubmissionScalarFieldEnum>
  }

  /**
   * StudentSubmission findFirst
   */
  export interface StudentSubmissionFindFirstArgs extends StudentSubmissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentSubmission findFirstOrThrow
   */
  export type StudentSubmissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * Filter, which StudentSubmission to fetch.
     */
    where?: StudentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubmissions to fetch.
     */
    orderBy?: Enumerable<StudentSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubmissions.
     */
    cursor?: StudentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubmissions.
     */
    distinct?: Enumerable<StudentSubmissionScalarFieldEnum>
  }


  /**
   * StudentSubmission findMany
   */
  export type StudentSubmissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * Filter, which StudentSubmissions to fetch.
     */
    where?: StudentSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubmissions to fetch.
     */
    orderBy?: Enumerable<StudentSubmissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSubmissions.
     */
    cursor?: StudentSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubmissions.
     */
    skip?: number
    distinct?: Enumerable<StudentSubmissionScalarFieldEnum>
  }


  /**
   * StudentSubmission create
   */
  export type StudentSubmissionCreateArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * The data needed to create a StudentSubmission.
     */
    data: XOR<StudentSubmissionCreateInput, StudentSubmissionUncheckedCreateInput>
  }


  /**
   * StudentSubmission createMany
   */
  export type StudentSubmissionCreateManyArgs = {
    /**
     * The data used to create many StudentSubmissions.
     */
    data: Enumerable<StudentSubmissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StudentSubmission update
   */
  export type StudentSubmissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * The data needed to update a StudentSubmission.
     */
    data: XOR<StudentSubmissionUpdateInput, StudentSubmissionUncheckedUpdateInput>
    /**
     * Choose, which StudentSubmission to update.
     */
    where: StudentSubmissionWhereUniqueInput
  }


  /**
   * StudentSubmission updateMany
   */
  export type StudentSubmissionUpdateManyArgs = {
    /**
     * The data used to update StudentSubmissions.
     */
    data: XOR<StudentSubmissionUpdateManyMutationInput, StudentSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubmissions to update
     */
    where?: StudentSubmissionWhereInput
  }


  /**
   * StudentSubmission upsert
   */
  export type StudentSubmissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * The filter to search for the StudentSubmission to update in case it exists.
     */
    where: StudentSubmissionWhereUniqueInput
    /**
     * In case the StudentSubmission found by the `where` argument doesn't exist, create a new StudentSubmission with this data.
     */
    create: XOR<StudentSubmissionCreateInput, StudentSubmissionUncheckedCreateInput>
    /**
     * In case the StudentSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSubmissionUpdateInput, StudentSubmissionUncheckedUpdateInput>
  }


  /**
   * StudentSubmission delete
   */
  export type StudentSubmissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
    /**
     * Filter which StudentSubmission to delete.
     */
    where: StudentSubmissionWhereUniqueInput
  }


  /**
   * StudentSubmission deleteMany
   */
  export type StudentSubmissionDeleteManyArgs = {
    /**
     * Filter which StudentSubmissions to delete
     */
    where?: StudentSubmissionWhereInput
  }


  /**
   * StudentSubmission.File
   */
  export type StudentSubmission$FileArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * StudentSubmission without action
   */
  export type StudentSubmissionArgs = {
    /**
     * Select specific fields to fetch from the StudentSubmission
     */
    select?: StudentSubmissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentSubmissionInclude | null
  }



  /**
   * Model File
   */


  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    submissionId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    submissionId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    name: string | null
    filePath: string | null
    projectId: number | null
    submissionId: number | null
    extension: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    filePath: string | null
    projectId: number | null
    submissionId: number | null
    extension: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    name: number
    filePath: number
    projectId: number
    submissionId: number
    extension: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    projectId?: true
    submissionId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    projectId?: true
    submissionId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    name?: true
    filePath?: true
    projectId?: true
    submissionId?: true
    extension?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    name?: true
    filePath?: true
    projectId?: true
    submissionId?: true
    extension?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    name?: true
    filePath?: true
    projectId?: true
    submissionId?: true
    extension?: true
    _all?: true
  }

  export type FileAggregateArgs = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs = {
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithAggregationInput>
    by: FileScalarFieldEnum[]
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }


  export type FileGroupByOutputType = {
    id: number
    name: string
    filePath: string
    projectId: number | null
    submissionId: number | null
    extension: string
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect = {
    id?: boolean
    name?: boolean
    filePath?: boolean
    projectId?: boolean
    submissionId?: boolean
    extension?: boolean
    project?: boolean | ProjectArgs
    submission?: boolean | StudentSubmissionArgs
  }


  export type FileInclude = {
    project?: boolean | ProjectArgs
    submission?: boolean | StudentSubmissionArgs
  }

  export type FileGetPayload<S extends boolean | null | undefined | FileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? File :
    S extends undefined ? never :
    S extends { include: any } & (FileArgs | FileFindManyArgs)
    ? File  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> | null :
        P extends 'submission' ? StudentSubmissionGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (FileArgs | FileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> | null :
        P extends 'submission' ? StudentSubmissionGetPayload<S['select'][P]> | null :  P extends keyof File ? File[P] : never
  } 
      : File


  type FileCountArgs = 
    Omit<FileFindManyArgs, 'select' | 'include'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'File'> extends True ? Prisma__FileClient<FileGetPayload<T>> : Prisma__FileClient<FileGetPayload<T> | null, null>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'File'> extends True ? Prisma__FileClient<FileGetPayload<T>> : Prisma__FileClient<FileGetPayload<T> | null, null>

    /**
     * Find the first File that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs>
    ): Prisma.PrismaPromise<Array<FileGetPayload<T>>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs>(
      args?: SelectSubset<T, FileCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    project<T extends ProjectArgs= {}>(args?: Subset<T, ProjectArgs>): Prisma__ProjectClient<ProjectGetPayload<T> | Null>;

    submission<T extends StudentSubmissionArgs= {}>(args?: Subset<T, StudentSubmissionArgs>): Prisma__StudentSubmissionClient<StudentSubmissionGetPayload<T> | Null>;

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
   * File base type for findUnique actions
   */
  export type FileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUnique
   */
  export interface FileFindUniqueArgs extends FileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File base type for findFirst actions
   */
  export type FileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: Enumerable<FileScalarFieldEnum>
  }

  /**
   * File findFirst
   */
  export interface FileFindFirstArgs extends FileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File create
   */
  export type FileCreateArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs = {
    /**
     * The data used to create many Files.
     */
    data: Enumerable<FileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
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
    description: string | null
    teacherId: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    teacherId: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    description: number
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
    description?: true
    teacherId?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teacherId?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
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
    description: string
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
    description?: boolean
    teacherId?: boolean
    teacher?: boolean | UserArgs
    Projects?: boolean | Module$ProjectsArgs
    Students?: boolean | Module$StudentsArgs
    _count?: boolean | ModuleCountOutputTypeArgs
  }


  export type ModuleInclude = {
    teacher?: boolean | UserArgs
    Projects?: boolean | Module$ProjectsArgs
    Students?: boolean | Module$StudentsArgs
    _count?: boolean | ModuleCountOutputTypeArgs
  }

  export type ModuleGetPayload<S extends boolean | null | undefined | ModuleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Module :
    S extends undefined ? never :
    S extends { include: any } & (ModuleArgs | ModuleFindManyArgs)
    ? Module  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'teacher' ? UserGetPayload<S['include'][P]> :
        P extends 'Projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends 'Students' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModuleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ModuleArgs | ModuleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'teacher' ? UserGetPayload<S['select'][P]> :
        P extends 'Projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends 'Students' ? Array < UserGetPayload<S['select'][P]>>  :
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
     * Create many Modules.
     *     @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     *     @example
     *     // Create many Modules
     *     const module = await prisma.module.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModuleCreateManyArgs>(
      args?: SelectSubset<T, ModuleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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

    teacher<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Projects<T extends Module$ProjectsArgs= {}>(args?: Subset<T, Module$ProjectsArgs>): Prisma.PrismaPromise<Array<ProjectGetPayload<T>>| Null>;

    Students<T extends Module$StudentsArgs= {}>(args?: Subset<T, Module$StudentsArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

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
   * Module createMany
   */
  export type ModuleCreateManyArgs = {
    /**
     * The data used to create many Modules.
     */
    data: Enumerable<ModuleCreateManyInput>
    skipDuplicates?: boolean
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
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
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


  export const FileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    filePath: 'filePath',
    projectId: 'projectId',
    submissionId: 'submissionId',
    extension: 'extension'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    teacherId: 'teacherId'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    moduleId: 'moduleId',
    filePath: 'filePath',
    dateSet: 'dateSet',
    dateDue: 'dateDue'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentSubmissionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    projectId: 'projectId',
    filePath: 'filePath',
    dateSubmitted: 'dateSubmitted'
  };

  export type StudentSubmissionScalarFieldEnum = (typeof StudentSubmissionScalarFieldEnum)[keyof typeof StudentSubmissionScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    role?: EnumRoleFilter | Role
    password?: StringFilter | string
    ownedModules?: ModuleListRelationFilter
    modules?: ModuleListRelationFilter
    StudentSubmission?: StudentSubmissionListRelationFilter
    studentProjects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    ownedModules?: ModuleOrderByRelationAggregateInput
    modules?: ModuleOrderByRelationAggregateInput
    StudentSubmission?: StudentSubmissionOrderByRelationAggregateInput
    studentProjects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
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
    filePath?: StringNullableFilter | string | null
    dateSet?: DateTimeFilter | Date | string
    dateDue?: DateTimeFilter | Date | string
    module?: XOR<ModuleRelationFilter, ModuleWhereInput>
    students?: UserListRelationFilter
    StudentSubmission?: StudentSubmissionListRelationFilter
    File?: FileListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    filePath?: SortOrder
    dateSet?: SortOrder
    dateDue?: SortOrder
    module?: ModuleOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
    StudentSubmission?: StudentSubmissionOrderByRelationAggregateInput
    File?: FileOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = {
    id?: number
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    filePath?: SortOrder
    dateSet?: SortOrder
    dateDue?: SortOrder
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
    filePath?: StringNullableWithAggregatesFilter | string | null
    dateSet?: DateTimeWithAggregatesFilter | Date | string
    dateDue?: DateTimeWithAggregatesFilter | Date | string
  }

  export type StudentSubmissionWhereInput = {
    AND?: Enumerable<StudentSubmissionWhereInput>
    OR?: Enumerable<StudentSubmissionWhereInput>
    NOT?: Enumerable<StudentSubmissionWhereInput>
    id?: IntFilter | number
    studentId?: IntFilter | number
    projectId?: IntFilter | number
    filePath?: StringFilter | string
    dateSubmitted?: DateTimeFilter | Date | string
    student?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    File?: FileListRelationFilter
  }

  export type StudentSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
    filePath?: SortOrder
    dateSubmitted?: SortOrder
    student?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    File?: FileOrderByRelationAggregateInput
  }

  export type StudentSubmissionWhereUniqueInput = {
    id?: number
  }

  export type StudentSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
    filePath?: SortOrder
    dateSubmitted?: SortOrder
    _count?: StudentSubmissionCountOrderByAggregateInput
    _avg?: StudentSubmissionAvgOrderByAggregateInput
    _max?: StudentSubmissionMaxOrderByAggregateInput
    _min?: StudentSubmissionMinOrderByAggregateInput
    _sum?: StudentSubmissionSumOrderByAggregateInput
  }

  export type StudentSubmissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentSubmissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentSubmissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentSubmissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    projectId?: IntWithAggregatesFilter | number
    filePath?: StringWithAggregatesFilter | string
    dateSubmitted?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FileWhereInput = {
    AND?: Enumerable<FileWhereInput>
    OR?: Enumerable<FileWhereInput>
    NOT?: Enumerable<FileWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    filePath?: StringFilter | string
    projectId?: IntNullableFilter | number | null
    submissionId?: IntNullableFilter | number | null
    extension?: StringFilter | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    submission?: XOR<StudentSubmissionRelationFilter, StudentSubmissionWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
    extension?: SortOrder
    project?: ProjectOrderByWithRelationInput
    submission?: StudentSubmissionOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = {
    id?: number
  }

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
    extension?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileScalarWhereWithAggregatesInput>
    OR?: Enumerable<FileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    filePath?: StringWithAggregatesFilter | string
    projectId?: IntNullableWithAggregatesFilter | number | null
    submissionId?: IntNullableWithAggregatesFilter | number | null
    extension?: StringWithAggregatesFilter | string
  }

  export type ModuleWhereInput = {
    AND?: Enumerable<ModuleWhereInput>
    OR?: Enumerable<ModuleWhereInput>
    NOT?: Enumerable<ModuleWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    teacherId?: IntFilter | number
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    Projects?: ProjectListRelationFilter
    Students?: UserListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    teacher?: UserOrderByWithRelationInput
    Projects?: ProjectOrderByRelationAggregateInput
    Students?: UserOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = {
    id?: number
  }

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
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
    description?: StringWithAggregatesFilter | string
    teacherId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleCreateNestedManyWithoutTeacherInput
    modules?: ModuleCreateNestedManyWithoutStudentsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutStudentInput
    studentProjects?: ProjectCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleUncheckedCreateNestedManyWithoutTeacherInput
    modules?: ModuleUncheckedCreateNestedManyWithoutStudentsInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentProjects?: ProjectUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUpdateManyWithoutTeacherNestedInput
    modules?: ModuleUpdateManyWithoutStudentsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutStudentNestedInput
    studentProjects?: ProjectUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUncheckedUpdateManyWithoutTeacherNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutStudentsNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentProjects?: ProjectUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    role: Role
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
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

  export type AdminCreateManyInput = {
    id?: number
    email: string
    name: string
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
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    module: ModuleCreateNestedOneWithoutProjectsInput
    students?: UserCreateNestedManyWithoutStudentProjectsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutProjectInput
    File?: FileCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    students?: UserUncheckedCreateNestedManyWithoutStudentProjectsInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutProjectInput
    File?: FileUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    students?: UserUpdateManyWithoutStudentProjectsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutProjectNestedInput
    File?: FileUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutStudentProjectsNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutProjectNestedInput
    File?: FileUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubmissionCreateInput = {
    filePath: string
    dateSubmitted: Date | string
    student: UserCreateNestedOneWithoutStudentSubmissionInput
    project: ProjectCreateNestedOneWithoutStudentSubmissionInput
    File?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type StudentSubmissionUncheckedCreateInput = {
    id?: number
    studentId: number
    projectId: number
    filePath: string
    dateSubmitted: Date | string
    File?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type StudentSubmissionUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentSubmissionNestedInput
    project?: ProjectUpdateOneRequiredWithoutStudentSubmissionNestedInput
    File?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type StudentSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    File?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type StudentSubmissionCreateManyInput = {
    id?: number
    studentId: number
    projectId: number
    filePath: string
    dateSubmitted: Date | string
  }

  export type StudentSubmissionUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    name: string
    filePath: string
    extension: string
    project?: ProjectCreateNestedOneWithoutFileInput
    submission?: StudentSubmissionCreateNestedOneWithoutFileInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    name: string
    filePath: string
    projectId?: number | null
    submissionId?: number | null
    extension: string
  }

  export type FileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutFileNestedInput
    submission?: StudentSubmissionUpdateOneWithoutFileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    submissionId?: NullableIntFieldUpdateOperationsInput | number | null
    extension?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateManyInput = {
    id?: number
    name: string
    filePath: string
    projectId?: number | null
    submissionId?: number | null
    extension: string
  }

  export type FileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    submissionId?: NullableIntFieldUpdateOperationsInput | number | null
    extension?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleCreateInput = {
    name: string
    description: string
    teacher: UserCreateNestedOneWithoutOwnedModulesInput
    Projects?: ProjectCreateNestedManyWithoutModuleInput
    Students?: UserCreateNestedManyWithoutModulesInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    teacherId: number
    Projects?: ProjectUncheckedCreateNestedManyWithoutModuleInput
    Students?: UserUncheckedCreateNestedManyWithoutModulesInput
  }

  export type ModuleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutOwnedModulesNestedInput
    Projects?: ProjectUpdateManyWithoutModuleNestedInput
    Students?: UserUpdateManyWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    Projects?: ProjectUncheckedUpdateManyWithoutModuleNestedInput
    Students?: UserUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: number
    name: string
    description: string
    teacherId: number
  }

  export type ModuleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type StudentSubmissionListRelationFilter = {
    every?: StudentSubmissionWhereInput
    some?: StudentSubmissionWhereInput
    none?: StudentSubmissionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
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

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ModuleRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    filePath?: SortOrder
    dateSet?: SortOrder
    dateDue?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    filePath?: SortOrder
    dateSet?: SortOrder
    dateDue?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    filePath?: SortOrder
    dateSet?: SortOrder
    dateDue?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type StudentSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
    filePath?: SortOrder
    dateSubmitted?: SortOrder
  }

  export type StudentSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
  }

  export type StudentSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
    filePath?: SortOrder
    dateSubmitted?: SortOrder
  }

  export type StudentSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
    filePath?: SortOrder
    dateSubmitted?: SortOrder
  }

  export type StudentSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    projectId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StudentSubmissionRelationFilter = {
    is?: StudentSubmissionWhereInput | null
    isNot?: StudentSubmissionWhereInput | null
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
    extension?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
    extension?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
    extension?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    submissionId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ModuleCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    createMany?: ModuleCreateManyTeacherInputEnvelope
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type ModuleCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutStudentsInput>, Enumerable<ModuleUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type StudentSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutStudentInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutStudentInput>
    createMany?: StudentSubmissionCreateManyStudentInputEnvelope
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutStudentsInput>, Enumerable<ProjectUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ModuleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    createMany?: ModuleCreateManyTeacherInputEnvelope
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type ModuleUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutStudentsInput>, Enumerable<ModuleUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
  }

  export type StudentSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutStudentInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutStudentInput>
    createMany?: StudentSubmissionCreateManyStudentInputEnvelope
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutStudentsInput>, Enumerable<ProjectUncheckedCreateWithoutStudentsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutStudentsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type ModuleUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<ModuleUpsertWithWhereUniqueWithoutTeacherInput>
    createMany?: ModuleCreateManyTeacherInputEnvelope
    set?: Enumerable<ModuleWhereUniqueInput>
    disconnect?: Enumerable<ModuleWhereUniqueInput>
    delete?: Enumerable<ModuleWhereUniqueInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
    update?: Enumerable<ModuleUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<ModuleUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<ModuleScalarWhereInput>
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

  export type StudentSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutStudentInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<StudentSubmissionUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: StudentSubmissionCreateManyStudentInputEnvelope
    set?: Enumerable<StudentSubmissionWhereUniqueInput>
    disconnect?: Enumerable<StudentSubmissionWhereUniqueInput>
    delete?: Enumerable<StudentSubmissionWhereUniqueInput>
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
    update?: Enumerable<StudentSubmissionUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<StudentSubmissionUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<StudentSubmissionScalarWhereInput>
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

  export type ModuleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Enumerable<ModuleCreateWithoutTeacherInput>, Enumerable<ModuleUncheckedCreateWithoutTeacherInput>>
    connectOrCreate?: Enumerable<ModuleCreateOrConnectWithoutTeacherInput>
    upsert?: Enumerable<ModuleUpsertWithWhereUniqueWithoutTeacherInput>
    createMany?: ModuleCreateManyTeacherInputEnvelope
    set?: Enumerable<ModuleWhereUniqueInput>
    disconnect?: Enumerable<ModuleWhereUniqueInput>
    delete?: Enumerable<ModuleWhereUniqueInput>
    connect?: Enumerable<ModuleWhereUniqueInput>
    update?: Enumerable<ModuleUpdateWithWhereUniqueWithoutTeacherInput>
    updateMany?: Enumerable<ModuleUpdateManyWithWhereWithoutTeacherInput>
    deleteMany?: Enumerable<ModuleScalarWhereInput>
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

  export type StudentSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutStudentInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<StudentSubmissionUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: StudentSubmissionCreateManyStudentInputEnvelope
    set?: Enumerable<StudentSubmissionWhereUniqueInput>
    disconnect?: Enumerable<StudentSubmissionWhereUniqueInput>
    delete?: Enumerable<StudentSubmissionWhereUniqueInput>
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
    update?: Enumerable<StudentSubmissionUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<StudentSubmissionUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<StudentSubmissionScalarWhereInput>
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

  export type ModuleCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutProjectsInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutStudentProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutStudentProjectsInput>, Enumerable<UserUncheckedCreateWithoutStudentProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutStudentProjectsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type StudentSubmissionCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutProjectInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutProjectInput>
    createMany?: StudentSubmissionCreateManyProjectInputEnvelope
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
  }

  export type FileCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutStudentProjectsInput = {
    create?: XOR<Enumerable<UserCreateWithoutStudentProjectsInput>, Enumerable<UserUncheckedCreateWithoutStudentProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutStudentProjectsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type StudentSubmissionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutProjectInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutProjectInput>
    createMany?: StudentSubmissionCreateManyProjectInputEnvelope
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModuleUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutProjectsInput
    upsert?: ModuleUpsertWithoutProjectsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<ModuleUpdateWithoutProjectsInput, ModuleUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateManyWithoutStudentProjectsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutStudentProjectsInput>, Enumerable<UserUncheckedCreateWithoutStudentProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutStudentProjectsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutStudentProjectsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutStudentProjectsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutStudentProjectsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type StudentSubmissionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutProjectInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<StudentSubmissionUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: StudentSubmissionCreateManyProjectInputEnvelope
    set?: Enumerable<StudentSubmissionWhereUniqueInput>
    disconnect?: Enumerable<StudentSubmissionWhereUniqueInput>
    delete?: Enumerable<StudentSubmissionWhereUniqueInput>
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
    update?: Enumerable<StudentSubmissionUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<StudentSubmissionUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<StudentSubmissionScalarWhereInput>
  }

  export type FileUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutStudentProjectsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutStudentProjectsInput>, Enumerable<UserUncheckedCreateWithoutStudentProjectsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutStudentProjectsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutStudentProjectsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutStudentProjectsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutStudentProjectsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type StudentSubmissionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<StudentSubmissionCreateWithoutProjectInput>, Enumerable<StudentSubmissionUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentSubmissionCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<StudentSubmissionUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: StudentSubmissionCreateManyProjectInputEnvelope
    set?: Enumerable<StudentSubmissionWhereUniqueInput>
    disconnect?: Enumerable<StudentSubmissionWhereUniqueInput>
    delete?: Enumerable<StudentSubmissionWhereUniqueInput>
    connect?: Enumerable<StudentSubmissionWhereUniqueInput>
    update?: Enumerable<StudentSubmissionUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<StudentSubmissionUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<StudentSubmissionScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutProjectInput>, Enumerable<FileUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: FileCreateManyProjectInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutStudentSubmissionInput = {
    create?: XOR<UserCreateWithoutStudentSubmissionInput, UserUncheckedCreateWithoutStudentSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutStudentSubmissionInput = {
    create?: XOR<ProjectCreateWithoutStudentSubmissionInput, ProjectUncheckedCreateWithoutStudentSubmissionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentSubmissionInput
    connect?: ProjectWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<Enumerable<FileCreateWithoutSubmissionInput>, Enumerable<FileUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutSubmissionInput>
    createMany?: FileCreateManySubmissionInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<Enumerable<FileCreateWithoutSubmissionInput>, Enumerable<FileUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutSubmissionInput>
    createMany?: FileCreateManySubmissionInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutStudentSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutStudentSubmissionInput, UserUncheckedCreateWithoutStudentSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentSubmissionInput
    upsert?: UserUpsertWithoutStudentSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStudentSubmissionInput, UserUncheckedUpdateWithoutStudentSubmissionInput>
  }

  export type ProjectUpdateOneRequiredWithoutStudentSubmissionNestedInput = {
    create?: XOR<ProjectCreateWithoutStudentSubmissionInput, ProjectUncheckedCreateWithoutStudentSubmissionInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentSubmissionInput
    upsert?: ProjectUpsertWithoutStudentSubmissionInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutStudentSubmissionInput, ProjectUncheckedUpdateWithoutStudentSubmissionInput>
  }

  export type FileUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutSubmissionInput>, Enumerable<FileUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutSubmissionInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutSubmissionInput>
    createMany?: FileCreateManySubmissionInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutSubmissionInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutSubmissionInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutSubmissionInput>, Enumerable<FileUncheckedCreateWithoutSubmissionInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutSubmissionInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutSubmissionInput>
    createMany?: FileCreateManySubmissionInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutSubmissionInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutSubmissionInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutFileInput = {
    create?: XOR<ProjectCreateWithoutFileInput, ProjectUncheckedCreateWithoutFileInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFileInput
    connect?: ProjectWhereUniqueInput
  }

  export type StudentSubmissionCreateNestedOneWithoutFileInput = {
    create?: XOR<StudentSubmissionCreateWithoutFileInput, StudentSubmissionUncheckedCreateWithoutFileInput>
    connectOrCreate?: StudentSubmissionCreateOrConnectWithoutFileInput
    connect?: StudentSubmissionWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutFileNestedInput = {
    create?: XOR<ProjectCreateWithoutFileInput, ProjectUncheckedCreateWithoutFileInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFileInput
    upsert?: ProjectUpsertWithoutFileInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutFileInput, ProjectUncheckedUpdateWithoutFileInput>
  }

  export type StudentSubmissionUpdateOneWithoutFileNestedInput = {
    create?: XOR<StudentSubmissionCreateWithoutFileInput, StudentSubmissionUncheckedCreateWithoutFileInput>
    connectOrCreate?: StudentSubmissionCreateOrConnectWithoutFileInput
    upsert?: StudentSubmissionUpsertWithoutFileInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentSubmissionWhereUniqueInput
    update?: XOR<StudentSubmissionUpdateWithoutFileInput, StudentSubmissionUncheckedUpdateWithoutFileInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutOwnedModulesInput = {
    create?: XOR<UserCreateWithoutOwnedModulesInput, UserUncheckedCreateWithoutOwnedModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedModulesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutModuleInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    createMany?: ProjectCreateManyModuleInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutModulesInput = {
    create?: XOR<Enumerable<UserCreateWithoutModulesInput>, Enumerable<UserUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutModulesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    createMany?: ProjectCreateManyModuleInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutModulesInput = {
    create?: XOR<Enumerable<UserCreateWithoutModulesInput>, Enumerable<UserUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutModulesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedModulesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedModulesInput, UserUncheckedCreateWithoutOwnedModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedModulesInput
    upsert?: UserUpsertWithoutOwnedModulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnedModulesInput, UserUncheckedUpdateWithoutOwnedModulesInput>
  }

  export type ProjectUpdateManyWithoutModuleNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutModuleInput>
    createMany?: ProjectCreateManyModuleInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutModuleInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutModuleInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserUpdateManyWithoutModulesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutModulesInput>, Enumerable<UserUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutModulesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutModulesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutModulesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutModulesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutModuleInput>, Enumerable<ProjectUncheckedCreateWithoutModuleInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutModuleInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutModuleInput>
    createMany?: ProjectCreateManyModuleInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutModuleInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutModuleInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutModulesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutModulesInput>, Enumerable<UserUncheckedCreateWithoutModulesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutModulesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutModulesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutModulesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutModulesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ModuleCreateWithoutTeacherInput = {
    name: string
    description: string
    Projects?: ProjectCreateNestedManyWithoutModuleInput
    Students?: UserCreateNestedManyWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    description: string
    Projects?: ProjectUncheckedCreateNestedManyWithoutModuleInput
    Students?: UserUncheckedCreateNestedManyWithoutModulesInput
  }

  export type ModuleCreateOrConnectWithoutTeacherInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutTeacherInput, ModuleUncheckedCreateWithoutTeacherInput>
  }

  export type ModuleCreateManyTeacherInputEnvelope = {
    data: Enumerable<ModuleCreateManyTeacherInput>
    skipDuplicates?: boolean
  }

  export type ModuleCreateWithoutStudentsInput = {
    name: string
    description: string
    teacher: UserCreateNestedOneWithoutOwnedModulesInput
    Projects?: ProjectCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    description: string
    teacherId: number
    Projects?: ProjectUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutStudentsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutStudentsInput, ModuleUncheckedCreateWithoutStudentsInput>
  }

  export type StudentSubmissionCreateWithoutStudentInput = {
    filePath: string
    dateSubmitted: Date | string
    project: ProjectCreateNestedOneWithoutStudentSubmissionInput
    File?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type StudentSubmissionUncheckedCreateWithoutStudentInput = {
    id?: number
    projectId: number
    filePath: string
    dateSubmitted: Date | string
    File?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type StudentSubmissionCreateOrConnectWithoutStudentInput = {
    where: StudentSubmissionWhereUniqueInput
    create: XOR<StudentSubmissionCreateWithoutStudentInput, StudentSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubmissionCreateManyStudentInputEnvelope = {
    data: Enumerable<StudentSubmissionCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutStudentsInput = {
    name: string
    description: string
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    module: ModuleCreateNestedOneWithoutProjectsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutProjectInput
    File?: FileCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutProjectInput
    File?: FileUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStudentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
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
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutOwnedModulesInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: Enumerable<ModuleScalarWhereInput>
    OR?: Enumerable<ModuleScalarWhereInput>
    NOT?: Enumerable<ModuleScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    teacherId?: IntFilter | number
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

  export type StudentSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSubmissionWhereUniqueInput
    update: XOR<StudentSubmissionUpdateWithoutStudentInput, StudentSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSubmissionCreateWithoutStudentInput, StudentSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSubmissionWhereUniqueInput
    data: XOR<StudentSubmissionUpdateWithoutStudentInput, StudentSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSubmissionScalarWhereInput
    data: XOR<StudentSubmissionUpdateManyMutationInput, StudentSubmissionUncheckedUpdateManyWithoutStudentSubmissionInput>
  }

  export type StudentSubmissionScalarWhereInput = {
    AND?: Enumerable<StudentSubmissionScalarWhereInput>
    OR?: Enumerable<StudentSubmissionScalarWhereInput>
    NOT?: Enumerable<StudentSubmissionScalarWhereInput>
    id?: IntFilter | number
    studentId?: IntFilter | number
    projectId?: IntFilter | number
    filePath?: StringFilter | string
    dateSubmitted?: DateTimeFilter | Date | string
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
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutStudentProjectsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    moduleId?: IntFilter | number
    filePath?: StringNullableFilter | string | null
    dateSet?: DateTimeFilter | Date | string
    dateDue?: DateTimeFilter | Date | string
  }

  export type ModuleCreateWithoutProjectsInput = {
    name: string
    description: string
    teacher: UserCreateNestedOneWithoutOwnedModulesInput
    Students?: UserCreateNestedManyWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    description: string
    teacherId: number
    Students?: UserUncheckedCreateNestedManyWithoutModulesInput
  }

  export type ModuleCreateOrConnectWithoutProjectsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutStudentProjectsInput = {
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleCreateNestedManyWithoutTeacherInput
    modules?: ModuleCreateNestedManyWithoutStudentsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutStudentProjectsInput = {
    id?: number
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleUncheckedCreateNestedManyWithoutTeacherInput
    modules?: ModuleUncheckedCreateNestedManyWithoutStudentsInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutStudentProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProjectsInput, UserUncheckedCreateWithoutStudentProjectsInput>
  }

  export type StudentSubmissionCreateWithoutProjectInput = {
    filePath: string
    dateSubmitted: Date | string
    student: UserCreateNestedOneWithoutStudentSubmissionInput
    File?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type StudentSubmissionUncheckedCreateWithoutProjectInput = {
    id?: number
    studentId: number
    filePath: string
    dateSubmitted: Date | string
    File?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type StudentSubmissionCreateOrConnectWithoutProjectInput = {
    where: StudentSubmissionWhereUniqueInput
    create: XOR<StudentSubmissionCreateWithoutProjectInput, StudentSubmissionUncheckedCreateWithoutProjectInput>
  }

  export type StudentSubmissionCreateManyProjectInputEnvelope = {
    data: Enumerable<StudentSubmissionCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutProjectInput = {
    name: string
    filePath: string
    extension: string
    submission?: StudentSubmissionCreateNestedOneWithoutFileInput
  }

  export type FileUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    filePath: string
    submissionId?: number | null
    extension: string
  }

  export type FileCreateOrConnectWithoutProjectInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutProjectInput, FileUncheckedCreateWithoutProjectInput>
  }

  export type FileCreateManyProjectInputEnvelope = {
    data: Enumerable<FileCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutProjectsInput = {
    update: XOR<ModuleUpdateWithoutProjectsInput, ModuleUncheckedUpdateWithoutProjectsInput>
    create: XOR<ModuleCreateWithoutProjectsInput, ModuleUncheckedCreateWithoutProjectsInput>
  }

  export type ModuleUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutOwnedModulesNestedInput
    Students?: UserUpdateManyWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    Students?: UserUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutStudentProjectsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutStudentProjectsInput, UserUncheckedUpdateWithoutStudentProjectsInput>
    create: XOR<UserCreateWithoutStudentProjectsInput, UserUncheckedCreateWithoutStudentProjectsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutStudentProjectsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutStudentProjectsInput, UserUncheckedUpdateWithoutStudentProjectsInput>
  }

  export type UserUpdateManyWithWhereWithoutStudentProjectsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutStudentsInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringFilter | string
    role?: EnumRoleFilter | Role
    password?: StringFilter | string
  }

  export type StudentSubmissionUpsertWithWhereUniqueWithoutProjectInput = {
    where: StudentSubmissionWhereUniqueInput
    update: XOR<StudentSubmissionUpdateWithoutProjectInput, StudentSubmissionUncheckedUpdateWithoutProjectInput>
    create: XOR<StudentSubmissionCreateWithoutProjectInput, StudentSubmissionUncheckedCreateWithoutProjectInput>
  }

  export type StudentSubmissionUpdateWithWhereUniqueWithoutProjectInput = {
    where: StudentSubmissionWhereUniqueInput
    data: XOR<StudentSubmissionUpdateWithoutProjectInput, StudentSubmissionUncheckedUpdateWithoutProjectInput>
  }

  export type StudentSubmissionUpdateManyWithWhereWithoutProjectInput = {
    where: StudentSubmissionScalarWhereInput
    data: XOR<StudentSubmissionUpdateManyMutationInput, StudentSubmissionUncheckedUpdateManyWithoutStudentSubmissionInput>
  }

  export type FileUpsertWithWhereUniqueWithoutProjectInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutProjectInput, FileUncheckedUpdateWithoutProjectInput>
    create: XOR<FileCreateWithoutProjectInput, FileUncheckedCreateWithoutProjectInput>
  }

  export type FileUpdateWithWhereUniqueWithoutProjectInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutProjectInput, FileUncheckedUpdateWithoutProjectInput>
  }

  export type FileUpdateManyWithWhereWithoutProjectInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFileInput>
  }

  export type FileScalarWhereInput = {
    AND?: Enumerable<FileScalarWhereInput>
    OR?: Enumerable<FileScalarWhereInput>
    NOT?: Enumerable<FileScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    filePath?: StringFilter | string
    projectId?: IntNullableFilter | number | null
    submissionId?: IntNullableFilter | number | null
    extension?: StringFilter | string
  }

  export type UserCreateWithoutStudentSubmissionInput = {
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleCreateNestedManyWithoutTeacherInput
    modules?: ModuleCreateNestedManyWithoutStudentsInput
    studentProjects?: ProjectCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutStudentSubmissionInput = {
    id?: number
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleUncheckedCreateNestedManyWithoutTeacherInput
    modules?: ModuleUncheckedCreateNestedManyWithoutStudentsInput
    studentProjects?: ProjectUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserCreateOrConnectWithoutStudentSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentSubmissionInput, UserUncheckedCreateWithoutStudentSubmissionInput>
  }

  export type ProjectCreateWithoutStudentSubmissionInput = {
    name: string
    description: string
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    module: ModuleCreateNestedOneWithoutProjectsInput
    students?: UserCreateNestedManyWithoutStudentProjectsInput
    File?: FileCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStudentSubmissionInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    students?: UserUncheckedCreateNestedManyWithoutStudentProjectsInput
    File?: FileUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStudentSubmissionInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStudentSubmissionInput, ProjectUncheckedCreateWithoutStudentSubmissionInput>
  }

  export type FileCreateWithoutSubmissionInput = {
    name: string
    filePath: string
    extension: string
    project?: ProjectCreateNestedOneWithoutFileInput
  }

  export type FileUncheckedCreateWithoutSubmissionInput = {
    id?: number
    name: string
    filePath: string
    projectId?: number | null
    extension: string
  }

  export type FileCreateOrConnectWithoutSubmissionInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput>
  }

  export type FileCreateManySubmissionInputEnvelope = {
    data: Enumerable<FileCreateManySubmissionInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentSubmissionInput = {
    update: XOR<UserUpdateWithoutStudentSubmissionInput, UserUncheckedUpdateWithoutStudentSubmissionInput>
    create: XOR<UserCreateWithoutStudentSubmissionInput, UserUncheckedCreateWithoutStudentSubmissionInput>
  }

  export type UserUpdateWithoutStudentSubmissionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUpdateManyWithoutTeacherNestedInput
    modules?: ModuleUpdateManyWithoutStudentsNestedInput
    studentProjects?: ProjectUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUncheckedUpdateManyWithoutTeacherNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutStudentsNestedInput
    studentProjects?: ProjectUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type ProjectUpsertWithoutStudentSubmissionInput = {
    update: XOR<ProjectUpdateWithoutStudentSubmissionInput, ProjectUncheckedUpdateWithoutStudentSubmissionInput>
    create: XOR<ProjectCreateWithoutStudentSubmissionInput, ProjectUncheckedCreateWithoutStudentSubmissionInput>
  }

  export type ProjectUpdateWithoutStudentSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    students?: UserUpdateManyWithoutStudentProjectsNestedInput
    File?: FileUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStudentSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutStudentProjectsNestedInput
    File?: FileUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type FileUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutSubmissionInput, FileUncheckedUpdateWithoutSubmissionInput>
    create: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput>
  }

  export type FileUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutSubmissionInput, FileUncheckedUpdateWithoutSubmissionInput>
  }

  export type FileUpdateManyWithWhereWithoutSubmissionInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFileInput>
  }

  export type ProjectCreateWithoutFileInput = {
    name: string
    description: string
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    module: ModuleCreateNestedOneWithoutProjectsInput
    students?: UserCreateNestedManyWithoutStudentProjectsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFileInput = {
    id?: number
    name: string
    description: string
    moduleId: number
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    students?: UserUncheckedCreateNestedManyWithoutStudentProjectsInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFileInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFileInput, ProjectUncheckedCreateWithoutFileInput>
  }

  export type StudentSubmissionCreateWithoutFileInput = {
    filePath: string
    dateSubmitted: Date | string
    student: UserCreateNestedOneWithoutStudentSubmissionInput
    project: ProjectCreateNestedOneWithoutStudentSubmissionInput
  }

  export type StudentSubmissionUncheckedCreateWithoutFileInput = {
    id?: number
    studentId: number
    projectId: number
    filePath: string
    dateSubmitted: Date | string
  }

  export type StudentSubmissionCreateOrConnectWithoutFileInput = {
    where: StudentSubmissionWhereUniqueInput
    create: XOR<StudentSubmissionCreateWithoutFileInput, StudentSubmissionUncheckedCreateWithoutFileInput>
  }

  export type ProjectUpsertWithoutFileInput = {
    update: XOR<ProjectUpdateWithoutFileInput, ProjectUncheckedUpdateWithoutFileInput>
    create: XOR<ProjectCreateWithoutFileInput, ProjectUncheckedCreateWithoutFileInput>
  }

  export type ProjectUpdateWithoutFileInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    students?: UserUpdateManyWithoutStudentProjectsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutStudentProjectsNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type StudentSubmissionUpsertWithoutFileInput = {
    update: XOR<StudentSubmissionUpdateWithoutFileInput, StudentSubmissionUncheckedUpdateWithoutFileInput>
    create: XOR<StudentSubmissionCreateWithoutFileInput, StudentSubmissionUncheckedCreateWithoutFileInput>
  }

  export type StudentSubmissionUpdateWithoutFileInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentSubmissionNestedInput
    project?: ProjectUpdateOneRequiredWithoutStudentSubmissionNestedInput
  }

  export type StudentSubmissionUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutOwnedModulesInput = {
    email: string
    name: string
    role: Role
    password: string
    modules?: ModuleCreateNestedManyWithoutStudentsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutStudentInput
    studentProjects?: ProjectCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutOwnedModulesInput = {
    id?: number
    email: string
    name: string
    role: Role
    password: string
    modules?: ModuleUncheckedCreateNestedManyWithoutStudentsInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentProjects?: ProjectUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserCreateOrConnectWithoutOwnedModulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedModulesInput, UserUncheckedCreateWithoutOwnedModulesInput>
  }

  export type ProjectCreateWithoutModuleInput = {
    name: string
    description: string
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    students?: UserCreateNestedManyWithoutStudentProjectsInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutProjectInput
    File?: FileCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutModuleInput = {
    id?: number
    name: string
    description: string
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
    students?: UserUncheckedCreateNestedManyWithoutStudentProjectsInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutProjectInput
    File?: FileUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutModuleInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutModuleInput, ProjectUncheckedCreateWithoutModuleInput>
  }

  export type ProjectCreateManyModuleInputEnvelope = {
    data: Enumerable<ProjectCreateManyModuleInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutModulesInput = {
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleCreateNestedManyWithoutTeacherInput
    StudentSubmission?: StudentSubmissionCreateNestedManyWithoutStudentInput
    studentProjects?: ProjectCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutModulesInput = {
    id?: number
    email: string
    name: string
    role: Role
    password: string
    ownedModules?: ModuleUncheckedCreateNestedManyWithoutTeacherInput
    StudentSubmission?: StudentSubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentProjects?: ProjectUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserCreateOrConnectWithoutModulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModulesInput, UserUncheckedCreateWithoutModulesInput>
  }

  export type UserUpsertWithoutOwnedModulesInput = {
    update: XOR<UserUpdateWithoutOwnedModulesInput, UserUncheckedUpdateWithoutOwnedModulesInput>
    create: XOR<UserCreateWithoutOwnedModulesInput, UserUncheckedCreateWithoutOwnedModulesInput>
  }

  export type UserUpdateWithoutOwnedModulesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUpdateManyWithoutStudentsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutStudentNestedInput
    studentProjects?: ProjectUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    modules?: ModuleUncheckedUpdateManyWithoutStudentsNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentProjects?: ProjectUncheckedUpdateManyWithoutStudentsNestedInput
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

  export type UserUpsertWithWhereUniqueWithoutModulesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutModulesInput, UserUncheckedUpdateWithoutModulesInput>
    create: XOR<UserCreateWithoutModulesInput, UserUncheckedCreateWithoutModulesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutModulesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutModulesInput, UserUncheckedUpdateWithoutModulesInput>
  }

  export type UserUpdateManyWithWhereWithoutModulesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutStudentsInput>
  }

  export type ModuleCreateManyTeacherInput = {
    id?: number
    name: string
    description: string
  }

  export type StudentSubmissionCreateManyStudentInput = {
    id?: number
    projectId: number
    filePath: string
    dateSubmitted: Date | string
  }

  export type ModuleUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectUpdateManyWithoutModuleNestedInput
    Students?: UserUpdateManyWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectUncheckedUpdateManyWithoutModuleNestedInput
    Students?: UserUncheckedUpdateManyWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutOwnedModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutOwnedModulesNestedInput
    Projects?: ProjectUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    Projects?: ProjectUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubmissionUpdateWithoutStudentInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutStudentSubmissionNestedInput
    File?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type StudentSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    File?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type StudentSubmissionUncheckedUpdateManyWithoutStudentSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutProjectsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutProjectNestedInput
    File?: FileUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutProjectNestedInput
    File?: FileUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutStudentProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubmissionCreateManyProjectInput = {
    id?: number
    studentId: number
    filePath: string
    dateSubmitted: Date | string
  }

  export type FileCreateManyProjectInput = {
    id?: number
    name: string
    filePath: string
    submissionId?: number | null
    extension: string
  }

  export type UserUpdateWithoutStudentProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUpdateManyWithoutTeacherNestedInput
    modules?: ModuleUpdateManyWithoutStudentsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUncheckedUpdateManyWithoutTeacherNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutStudentsNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentSubmissionUpdateWithoutProjectInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentSubmissionNestedInput
    File?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type StudentSubmissionUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    dateSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    File?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type FileUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    submission?: StudentSubmissionUpdateOneWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    submissionId?: NullableIntFieldUpdateOperationsInput | number | null
    extension?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    submissionId?: NullableIntFieldUpdateOperationsInput | number | null
    extension?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateManySubmissionInput = {
    id?: number
    name: string
    filePath: string
    projectId?: number | null
    extension: string
  }

  export type FileUpdateWithoutSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    extension?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyModuleInput = {
    id?: number
    name: string
    description: string
    filePath?: string | null
    dateSet: Date | string
    dateDue: Date | string
  }

  export type ProjectUpdateWithoutModuleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUpdateManyWithoutStudentProjectsNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutProjectNestedInput
    File?: FileUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutStudentProjectsNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutProjectNestedInput
    File?: FileUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    dateSet?: DateTimeFieldUpdateOperationsInput | Date | string
    dateDue?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutModulesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUpdateManyWithoutTeacherNestedInput
    StudentSubmission?: StudentSubmissionUpdateManyWithoutStudentNestedInput
    studentProjects?: ProjectUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    ownedModules?: ModuleUncheckedUpdateManyWithoutTeacherNestedInput
    StudentSubmission?: StudentSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentProjects?: ProjectUncheckedUpdateManyWithoutStudentsNestedInput
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