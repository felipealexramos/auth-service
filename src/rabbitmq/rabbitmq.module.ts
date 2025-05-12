import { Module } from '@nestjs/common';
import { RabbitMQModule as RMQ } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  imports: [
    RMQ.forRoot({
      exchanges: [{ name: 'auth-exchange', type: 'topic' }],
      uri: process.env.RABBITMQ_URL || 'amqp://localhost',
    }),
  ],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
