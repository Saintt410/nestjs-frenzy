import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import WebLogger, { WebInfoLogger } from './libs/winston';
import * as morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance: WebLogger,
    }),
  });

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  app.use(
    morgan('common', {
      stream: {
        write: (message: string) => WebInfoLogger(message.trim()),
      },
    }),
  );
  await app.listen(port);
}
bootstrap();
