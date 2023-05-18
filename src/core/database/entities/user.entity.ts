import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: 'PK' })
  readonly id: number;

  @Column({ type: 'varchar', length: 100, comment: 'Name' })
  name: string;

  @CreateDateColumn({ type: 'timestamp', comment: 'Create Timestamp' })
  createdAt: number;
}

export class UserCreateEntity extends User {
  constructor(name: string) {
    super();

    this.name = name;
  }

  public static of(name: string): User {
    return new UserCreateEntity(name);
  }
}
