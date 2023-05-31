import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity ()
export class GitRepo {
  @PrimaryGeneratedColumn ()
  public id: number;

  @Column ()
  public sha: string;

  // @Column ()
  // public tree: TreeItem[];

  @Column ()
  public truncated: boolean;

  @Column ({ unique: true })
  public url: string;
}
