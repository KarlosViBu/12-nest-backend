import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // my database, MongoAtlas
    // MONGO_URI=mongodb+srv://Karlos:Karatlas11@clusterprogweb.rtknzz0.mongodb.net/auth-db

    MongooseModule.forRoot( process.env.MONGO_URI ),

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
