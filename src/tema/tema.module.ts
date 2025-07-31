import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "./services/tema.service";
import { TemaController } from "./controllers/tema.controller";
import { Tema } from "./entities/tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    controllers: [TemaController],
    providers: [TemaService],
    exports: [TemaService]
})
export class TemaModule {}