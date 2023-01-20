package mx.edu.utez.firstapp.models.person;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.firstapp.models.user.User;

import javax.persistence.*;

@Entity //we have a table in mi bd , but i need an id
@Table(name ="people")
//crea los constructores automaticamente
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    private String surname;
    private String lastname;
    private String birthday;
    private String curp;

    private String status;

    private String gender;

    @OneToOne(mappedBy = "person", cascade = CascadeType.PERSIST)
    @PrimaryKeyJoinColumn
    private User user;



}
