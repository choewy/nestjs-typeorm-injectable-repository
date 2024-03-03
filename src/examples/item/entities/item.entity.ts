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

import { User } from 'src/examples/user';

@Entity()
export class Item {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'smallint', unsigned: true, comment: 'Count' })
  count: number;

  @CreateDateColumn({ type: 'timestamp', comment: 'Create Timestamp' })
  createdAt: number;

  @UpdateDateColumn({ type: 'timestamp', comment: 'Update Timestamp' })
  updatedAt: number;

  @DeleteDateColumn({ type: 'timestamp', comment: 'Delete Timestamp' })
  deletedAt: number | null;

  @ManyToOne(() => User, (e) => e.items, { nullable: true })
  @JoinColumn()
  user: User | null;
}
