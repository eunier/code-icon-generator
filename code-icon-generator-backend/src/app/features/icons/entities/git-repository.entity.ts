import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TreeItem } from './tree-item.entity';

@Entity ()
export class GitRepository {
  @PrimaryGeneratedColumn ()
  public id: number;

  @Column ()
  public sha: string;

  // @Column ()
  // public tree: TreeItem[];

  @Column ()
  public truncated: boolean;

  @Column ()
  public url: string;
}
