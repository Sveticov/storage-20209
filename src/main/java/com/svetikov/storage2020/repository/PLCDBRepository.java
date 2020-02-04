package com.svetikov.storage2020.repository;

import com.svetikov.storage2020.models.PLCDbData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PLCDBRepository extends JpaRepository<PLCDbData,Integer> {
}
