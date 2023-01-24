package mx.edu.utez.firstapp.models.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

//este es nuestra respúesta a cada peticion
public class CustomResponse<T> {
    //the "T" i for any type of data
    T data;  //datos que enviamos de vuelta
    boolean error;
    int statusCode;
    String message;



}
