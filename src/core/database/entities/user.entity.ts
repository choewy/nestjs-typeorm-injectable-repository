import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

export class UserRelation {
  @OneToMany(() => Item, (e) => e.user, { cascade: ['insert', 'update'] })
  @JoinTable()
  items: Item[];
}

@Entity()
export class User extends UserRelation {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: 'PK' })
  readonly id: number;

  @Column({ type: 'varchar', length: 100, comment: 'Name' })
  name: string;

  @CreateDateColumn({ type: 'timestamp', comment: 'Create Timestamp' })
  createdAt: number;
}

export class UserCreateEntity extends User {
  constructor(name: string, items?: Item[]) {
    super();

    this.name = name;
    this.items = items;
  }

  public static of(name: string, items: Item[]): User {
    return new UserCreateEntity(name, items);
  }
}
