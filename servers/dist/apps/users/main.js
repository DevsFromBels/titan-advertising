/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/users/src/dto/user.dto.ts":
/*!****************************************!*\
  !*** ./apps/users/src/dto/user.dto.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = exports.ActivationDto = exports.RegisterDto = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let RegisterDto = class RegisterDto {
};
exports.RegisterDto = RegisterDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required." }),
    (0, class_validator_1.IsString)({ message: "Name must need to be one string." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Password is required." }),
    (0, class_validator_1.MinLength)(8, { message: "Password must be at least 8 characters." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required." }),
    (0, class_validator_1.IsEmail)({}, { message: "Email is invalid." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
exports.RegisterDto = RegisterDto = __decorate([
    (0, graphql_1.InputType)()
], RegisterDto);
let ActivationDto = class ActivationDto {
};
exports.ActivationDto = ActivationDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Activation Token is required." }),
    __metadata("design:type", String)
], ActivationDto.prototype, "activationToken", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Activation Code is required." }),
    __metadata("design:type", String)
], ActivationDto.prototype, "activationCode", void 0);
exports.ActivationDto = ActivationDto = __decorate([
    (0, graphql_1.InputType)()
], ActivationDto);
let LoginDto = class LoginDto {
};
exports.LoginDto = LoginDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required." }),
    (0, class_validator_1.IsEmail)({}, { message: "Email must be valid." }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Password is required." }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto = __decorate([
    (0, graphql_1.InputType)()
], LoginDto);


/***/ }),

/***/ "./apps/users/src/email/email.module.ts":
/*!**********************************************!*\
  !*** ./apps/users/src/email/email.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const email_service_1 = __webpack_require__(/*! ./email.service */ "./apps/users/src/email/email.service.ts");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const path_1 = __webpack_require__(/*! path */ "path");
const ejs_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/ejs.adapter */ "@nestjs-modules/mailer/dist/adapters/ejs.adapter");
let EmailModule = class EmailModule {
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (config) => ({
                    transport: {
                        host: config.get("SMTP_HOST"),
                        secure: true,
                        auth: {
                            user: config.get("SMTP_MAIL"),
                            pass: config.get("SMTP_PASSWORD"),
                        },
                    },
                    defaults: {
                        from: "TITAN Finance",
                    },
                    template: {
                        dir: (0, path_1.resolve)(__dirname, `${process.cwd()}/email-templates`),
                        adapter: new ejs_adapter_1.EjsAdapter(),
                        options: {
                            strict: false,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [email_service_1.EmailService],
        exports: [email_service_1.EmailService]
    })
], EmailModule);


/***/ }),

/***/ "./apps/users/src/email/email.service.ts":
/*!***********************************************!*\
  !*** ./apps/users/src/email/email.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailService = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let EmailService = class EmailService {
    constructor(mailSevice) {
        this.mailSevice = mailSevice;
    }
    async sendMail({ subject, email, name, activationCode, template, }) {
        await this.mailSevice.sendMail({
            to: email,
            subject,
            template,
            context: {
                name,
                activationCode,
            },
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], EmailService);


/***/ }),

/***/ "./apps/users/src/entities/user.entity.ts":
/*!************************************************!*\
  !*** ./apps/users/src/entities/user.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createdAt", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)()
], User);


/***/ }),

/***/ "./apps/users/src/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./apps/users/src/guards/auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
let AuthGuard = class AuthGuard {
    constructor(jwtService, prisma, configService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configService = configService;
    }
    async canActivate(context) {
        const gqlContext = graphql_1.GqlExecutionContext.create(context);
        const { req } = gqlContext.getContext();
        console.log(req.headers);
        const accessToken = req.headers.accesstoken;
        const refreshToken = req.headers.refreshtoken;
        if (!accessToken || !refreshToken) {
            throw new common_1.UnauthorizedException("Please login to access this resource");
        }
        if (accessToken) {
            const decoded = this.jwtService.verify(accessToken, {
                secret: this.configService.get("ACCESS_TOKEN_SECRET"),
            });
            if (!decoded) {
                throw new common_1.UnauthorizedException("Invalid access token!");
            }
            await this.updateAccessToken(req);
        }
        return true;
    }
    async updateAccessToken(req) {
        try {
            const refreshTokenData = req.headers.refreshtoken;
            const decoded = this.jwtService.decode(refreshTokenData);
            const expirationTime = decoded.exp * 1000;
            if (expirationTime < Date.now()) {
                throw new common_1.UnauthorizedException("Please login to access this resource!");
            }
            const user = await this.prisma.user.findUnique({
                where: {
                    id: decoded.id,
                },
            });
            const accessToken = this.jwtService.sign({ id: user.id }, {
                secret: this.configService.get("ACCESS_TOKEN_SECRET"),
                expiresIn: "5m",
            });
            const refreshToken = this.jwtService.sign({ id: user.id }, {
                secret: this.configService.get("REFRESH_TOKEN_SECRET"),
                expiresIn: "7d",
            });
            req.accesstoken = accessToken;
            req.refreshtoken = refreshToken;
            req.user = user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthGuard);


/***/ }),

/***/ "./apps/users/src/types/users.types.ts":
/*!*********************************************!*\
  !*** ./apps/users/src/types/users.types.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogoutResponse = exports.LoginResponse = exports.ActivationResponse = exports.RegisterResponse = exports.ErrorType = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/users/src/entities/user.entity.ts");
let ErrorType = class ErrorType {
};
exports.ErrorType = ErrorType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ErrorType.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ErrorType.prototype, "code", void 0);
exports.ErrorType = ErrorType = __decorate([
    (0, graphql_1.ObjectType)()
], ErrorType);
let RegisterResponse = class RegisterResponse {
};
exports.RegisterResponse = RegisterResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterResponse.prototype, "activation_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], RegisterResponse.prototype, "error", void 0);
exports.RegisterResponse = RegisterResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RegisterResponse);
let ActivationResponse = class ActivationResponse {
};
exports.ActivationResponse = ActivationResponse;
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", Object)
], ActivationResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], ActivationResponse.prototype, "error", void 0);
exports.ActivationResponse = ActivationResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ActivationResponse);
let LoginResponse = class LoginResponse {
};
exports.LoginResponse = LoginResponse;
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", Object)
], LoginResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoginResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], LoginResponse.prototype, "error", void 0);
exports.LoginResponse = LoginResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoginResponse);
let LogoutResponse = class LogoutResponse {
};
exports.LogoutResponse = LogoutResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LogoutResponse.prototype, "message", void 0);
exports.LogoutResponse = LogoutResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LogoutResponse);


/***/ }),

/***/ "./apps/users/src/users.module.ts":
/*!****************************************!*\
  !*** ./apps/users/src/users.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const users_resolver_1 = __webpack_require__(/*! ./users.resolver */ "./apps/users/src/users.resolver.ts");
const email_module_1 = __webpack_require__(/*! ./email/email.module */ "./apps/users/src/email/email.module.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloFederationDriver,
                autoSchemaFile: {
                    federation: 2,
                },
            }),
            email_module_1.EmailModule,
        ],
        controllers: [],
        providers: [
            users_service_1.UsersService,
            config_1.ConfigService,
            jwt_1.JwtService,
            prisma_service_1.PrismaService,
            users_resolver_1.UsersResolver,
        ],
    })
], UsersModule);


/***/ }),

/***/ "./apps/users/src/users.resolver.ts":
/*!******************************************!*\
  !*** ./apps/users/src/users.resolver.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
const users_types_1 = __webpack_require__(/*! ./types/users.types */ "./apps/users/src/types/users.types.ts");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guard_1 = __webpack_require__(/*! ./guards/auth.guard */ "./apps/users/src/guards/auth.guard.ts");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async register(registerDto, context) {
        if (!registerDto.email || !registerDto.name || !registerDto.password) {
            throw new common_1.BadRequestException("Please fill the all fields.");
        }
        const { activation_token } = await this.userService.register(registerDto, context.res);
        return { activation_token };
    }
    async activateUser(activationDto, context) {
        return await this.userService.actiivateUser(activationDto, context.res);
    }
    async login(email, password) {
        return await this.userService.Login({ email, password });
    }
    async getLoggedInUser(context) {
        return this.userService.getLoggedInUser(context.req);
    }
    async LogOutUser(context) {
        return this.userService.Logout(context.req);
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => users_types_1.RegisterResponse),
    __param(0, (0, graphql_1.Args)("registerDto")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.RegisterDto !== "undefined" && user_dto_1.RegisterDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)(() => users_types_1.ActivationResponse),
    __param(0, (0, graphql_1.Args)("activationDto")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_dto_1.ActivationDto !== "undefined" && user_dto_1.ActivationDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersResolver.prototype, "activateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => users_types_1.LoginResponse),
    __param(0, (0, graphql_1.Args)("email")),
    __param(1, (0, graphql_1.Args)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Query)(() => users_types_1.LoginResponse),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getLoggedInUser", null);
__decorate([
    (0, graphql_1.Query)(() => users_types_1.LogoutResponse),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "LogOutUser", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)("User"),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersResolver);


/***/ }),

/***/ "./apps/users/src/users.service.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/users.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const email_service_1 = __webpack_require__(/*! ./email/email.service */ "./apps/users/src/email/email.service.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const sendToken_1 = __webpack_require__(/*! ./utils/sendToken */ "./apps/users/src/utils/sendToken.ts");
let UsersService = class UsersService {
    constructor(jwtService, prisma, configService, emailService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configService = configService;
        this.emailService = emailService;
    }
    async register(registerDto, response) {
        const { name, email, password } = registerDto;
        const id = name.toLowerCase().trim();
        const createdAt = new Date();
        const isEmailExists = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        const existName = await this.prisma.user.findUnique({
            where: {
                name,
            },
        });
        if (existName) {
            throw new common_1.BadRequestException("User already exist with this username!");
        }
        if (existName) {
            throw new common_1.BadRequestException("User already exist with this username!");
        }
        if (isEmailExists) {
            throw new common_1.BadRequestException("User allready exists with this email");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            id,
            name,
            password: hashedPassword,
            email,
            createdAt,
        };
        const activationToken = await this.createActivationToken(user);
        const activationCode = activationToken.activationCode;
        const activation_token = activationToken.token;
        await this.emailService.sendMail({
            email,
            subject: "Activate your account!",
            template: "./activation-mail",
            name,
            activationCode,
        });
        return { activation_token, response };
    }
    async createActivationToken(user) {
        const activationCode = Math.floor(100000 + Math.random() * 9000).toString();
        const token = this.jwtService.sign({
            user,
            activationCode,
        }, {
            secret: this.configService.get("ACTIVATION_SECRET"),
            expiresIn: "5m",
        });
        return { token, activationCode };
    }
    async actiivateUser(activationDto, response) {
        const { activationToken, activationCode } = activationDto;
        const newUser = this.jwtService.verify(activationToken, {
            secret: this.configService.get("ACTIVATION_SECRET"),
        });
        if (newUser.activationCode !== activationCode) {
            throw new common_1.BadRequestException("Invalid activation code");
        }
        const { name, email, password } = newUser.user;
        const id = name.toLowerCase().trim();
        const createdAt = new Date();
        const existName = await this.prisma.user.findUnique({
            where: {
                name,
            }
        });
        const existUser = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (existName) {
            throw new common_1.BadRequestException("User already exist with this username!");
        }
        if (existUser) {
            throw new common_1.BadRequestException("User already exist with this email!");
        }
        const user = await this.prisma.user.create({
            data: {
                id,
                name,
                email,
                password,
                createdAt,
            },
        });
        const profile = await this.prisma.profile.create({
            data: {
                info: "",
                isPublic: true,
                userId: user.id
            }
        });
        const avatar = this.prisma.avatars.create({
            data: {
                public: true,
                url: "",
                userId: user.id
            }
        });
        return { user, response, profile, avatar };
    }
    async Login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (user && (await this.compaprePassword(password, user.password))) {
            const tokeSender = new sendToken_1.TokenSender(this.configService, this.jwtService);
            return tokeSender.sendToken(user);
        }
        else {
            return {
                user: null,
                accessToken: null,
                refreshToken: null,
                error: {
                    message: "Inavlid email or password",
                },
            };
        }
    }
    async getLoggedInUser(req) {
        const user = req.user;
        const accessToken = req.accesstoken;
        const refreshToken = req.refreshtoken;
        console.log(accessToken);
        console.log(refreshToken);
        return { user, refreshToken, accessToken };
    }
    async Logout(req) {
        req.user = null;
        req.accesstoken = null;
        req.refreshtoken = null;
        return {
            message: "Logged out successfully!",
        };
    }
    async compaprePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _d : Object])
], UsersService);


/***/ }),

/***/ "./apps/users/src/utils/sendToken.ts":
/*!*******************************************!*\
  !*** ./apps/users/src/utils/sendToken.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenSender = void 0;
class TokenSender {
    constructor(configService, jwt) {
        this.configService = configService;
        this.jwt = jwt;
    }
    sendToken(user) {
        const accessToken = this.jwt.sign({
            id: user.id,
        }, {
            secret: this.configService.get("ACCESS_TOKEN_SECRET"),
        });
        const refreshToken = this.jwt.sign({
            id: user.id,
        }, {
            secret: this.configService.get("REFRESH_TOKEN_SECRET"),
            expiresIn: "7d",
        });
        return { user, accessToken, refreshToken };
    }
}
exports.TokenSender = TokenSender;


/***/ }),

/***/ "./prisma/prisma.service.ts":
/*!**********************************!*\
  !*** ./prisma/prisma.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/ejs.adapter":
/*!*******************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/ejs.adapter" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/users/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const users_module_1 = __webpack_require__(/*! ./users.module */ "./apps/users/src/users.module.ts");
const path_1 = __webpack_require__(/*! path */ "path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(users_module_1.UsersModule);
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "public"));
    app.setBaseViewsDir((0, path_1.join)(__dirname, "..", "servers/email-templates"));
    app.setViewEngine("ejs");
    app.enableCors();
    await app.listen(4001);
}
bootstrap();

})();

/******/ })()
;