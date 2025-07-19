export class CreateProductDto {
  name: string;
  description?: string;
  status: 'idea' | 'in-progress' | 'shipped';
}
