import { Injectable, OnModuleInit } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  onModuleInit() {
    console.log('[RabbitMQ] Service Ready');
  }

  async publish(routingKey: string, message: any) {
    await this.amqpConnection.publish('auth-exchange', routingKey, message);
  }
}
