import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Item } from '@domains/item';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  readonly id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  readonly createdAt: number;

  @OneToMany(() => Item, (e) => e.user, { cascade: true })
  @JoinTable()
  items: Item[];
}
