import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GitRepo } from './git-repository.entity';

@Entity ()
export class TreeItem {
  @ManyToOne (() => GitRepo, (gitRepo) => gitRepo.tree)
  public gitRepo: GitRepo;

  @PrimaryGeneratedColumn ()
  public id: number;

  @Column ()
  public mode: string;

  @Column ()
  public path: string;

  @Column ()
  public sha: string;

  @Column ({ nullable: true })
  public size?: number;

  @Column ()
  public type: string;

  @Column ()
  public url: string;
}
