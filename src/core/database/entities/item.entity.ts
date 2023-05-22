import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

export class ItemRelation {
  @ManyToOne(() => User, (e) => e.items, { nullable: true })
  @JoinColumn()
  user: User | null;

  @Column({ type: 'bigint', unsigned: true, comment: 'User PK', nullable: true })
  userId: number | null;
}

@Entity()
export class Item extends ItemRelation {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: 'PK' })
  id: number;

  @Column({ type: 'varchar', length: 100, comment: 'Name' })
  name: string;

  @Column({ type: 'smallint', unsigned: true, comment: 'Count' })
  count: number;

  @CreateDateColumn({ type: 'timestamp', comment: 'Create Timestamp' })
  createdAt: number;

  @UpdateDateColumn({ type: 'timestamp', comment: 'Update Timestamp' })
  updatedAt: number;

  @DeleteDateColumn({ type: 'timestamp', comment: 'Delete Timestamp' })
  deletedAt: number | null;
}

export class ItemCreateEntity extends Item {
  constructor(name: string, count: number, user?: User) {
    super();

    this.name = name;
    this.count = count;
    this.user = user;
  }

  public static of(name: string, count: number, user?: User): Item {
    return new ItemCreateEntity(name, count, user);
  }
}

export class ItemUpdateEntity extends Item {
  constructor() {
    super();
  }

  public static giveToUser(user: User): Item {
    const item = new ItemUpdateEntity();

    item.user = user;

    return item;
  }

  public static increaseCount(count: number, value = 1): Item {
    const item = new ItemUpdateEntity();

    item.count = count + value;

    return item;
  }

  public static decreaseCount(count: number, value = 1): Item {
    const item = new ItemUpdateEntity();

    item.count = count - value;

    return item;
  }
}
