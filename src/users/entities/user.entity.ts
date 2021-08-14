import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
 
@Entity()
class User extends BaseEntity {
  
  @Column({ unique: true })
  public email: string;
 
  @Column({type: 'string',name: "USERNAME"})
  public name: string;
 
  @Column({type: 'string',name: "PASSWORD"})
  public password: string;
}
 
export default User;