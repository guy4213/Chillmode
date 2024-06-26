package guy.example.FinalprojectUpdated.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class AuthenticationException extends BlogException {
    public AuthenticationException(String message) {
        super(message);
    }

    public AuthenticationException() {
        super("Not Authenticated");
    }
}
