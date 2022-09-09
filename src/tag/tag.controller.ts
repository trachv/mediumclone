import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagsService: TagService) {}

  @Get()
  findAll(): string[] {
    return this.tagsService.findAll();
  }
}
