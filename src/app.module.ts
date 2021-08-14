import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthenticationModule],
})
export class AppModule {}
