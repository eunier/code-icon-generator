import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TreeItem } from './tree-item.entity';

@Entity ()
export class GitRepo {
  @PrimaryGeneratedColumn ()
  public id: number;

  @Column ()
  public sha: string;

  @OneToMany (() => TreeItem, (treeItem) => treeItem.gitRepo)
  public tree?: TreeItem[];

  @Column ()
  public truncated: boolean;

  @Column ({ unique: true })
  public url: string;
}
