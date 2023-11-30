import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturaModule } from './components/course/asignatura.module';
import { UsersModule } from './components/users/users.module';
import { StudentModule } from './components/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'student',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    StudentModule,
    AsignaturaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
