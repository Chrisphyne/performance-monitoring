package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.BankAccount;
import io.github.jhipster.sample.domain.User;
import io.github.jhipster.sample.service.dto.BankAccountDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-01-02T10:33:02+0300",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.3.1200.v20200916-0645, environment: Java 11.0.9.1 (AdoptOpenJDK)"
)
@Component
public class BankAccountMapperImpl implements BankAccountMapper {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<BankAccount> toEntity(List<BankAccountDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<BankAccount> list = new ArrayList<BankAccount>( dtoList.size() );
        for ( BankAccountDTO bankAccountDTO : dtoList ) {
            list.add( toEntity( bankAccountDTO ) );
        }

        return list;
    }

    @Override
    public List<BankAccountDTO> toDto(List<BankAccount> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<BankAccountDTO> list = new ArrayList<BankAccountDTO>( entityList.size() );
        for ( BankAccount bankAccount : entityList ) {
            list.add( toDto( bankAccount ) );
        }

        return list;
    }

    @Override
    public BankAccountDTO toDto(BankAccount bankAccount) {
        if ( bankAccount == null ) {
            return null;
        }

        BankAccountDTO bankAccountDTO = new BankAccountDTO();

        bankAccountDTO.setUserLogin( bankAccountUserLogin( bankAccount ) );
        bankAccountDTO.setUserId( bankAccountUserId( bankAccount ) );
        bankAccountDTO.setId( bankAccount.getId() );
        bankAccountDTO.setName( bankAccount.getName() );
        bankAccountDTO.setBalance( bankAccount.getBalance() );

        return bankAccountDTO;
    }

    @Override
    public BankAccount toEntity(BankAccountDTO bankAccountDTO) {
        if ( bankAccountDTO == null ) {
            return null;
        }

        BankAccount bankAccount = new BankAccount();

        bankAccount.setUser( userMapper.userFromId( bankAccountDTO.getUserId() ) );
        bankAccount.setId( bankAccountDTO.getId() );
        bankAccount.setName( bankAccountDTO.getName() );
        bankAccount.setBalance( bankAccountDTO.getBalance() );

        return bankAccount;
    }

    private String bankAccountUserLogin(BankAccount bankAccount) {
        if ( bankAccount == null ) {
            return null;
        }
        User user = bankAccount.getUser();
        if ( user == null ) {
            return null;
        }
        String login = user.getLogin();
        if ( login == null ) {
            return null;
        }
        return login;
    }

    private Long bankAccountUserId(BankAccount bankAccount) {
        if ( bankAccount == null ) {
            return null;
        }
        User user = bankAccount.getUser();
        if ( user == null ) {
            return null;
        }
        Long id = user.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
