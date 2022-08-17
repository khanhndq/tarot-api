import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';import { TarotModule } from './tarot/tarot.module';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [  
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'forward')
      , serveRoot: '/forward'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'reverse')
      , serveRoot: '/reverse'
    }),
TarotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
