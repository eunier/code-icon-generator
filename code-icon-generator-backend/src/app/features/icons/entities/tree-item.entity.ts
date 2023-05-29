import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity ()
export class TreeItem {
  @PrimaryGeneratedColumn ()
  public id: number;

  @Column ()
  public mode: string;

  @Column ()
  public path: string;

  @Column ()
  public sha: string;

  @Column ()
  public size?: number;

  @Column ()
  public type: string;

  @Column ()
  public url: string;
}
