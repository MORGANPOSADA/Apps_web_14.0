package mx.edu.utez.firstapp.models.person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    boolean findById(long id);
    Person findPersonByCurp(String curp);

    List<Person> findAllByGender(String gender);
    @Query(name = "SELECT * FROM people", nativeQuery = true)  //osea que es nativa , es totalmente SQL
    List<Person> buscarTodos();

}
