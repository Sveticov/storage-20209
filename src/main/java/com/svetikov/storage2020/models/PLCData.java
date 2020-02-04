package com.svetikov.storage2020.models;



import lombok.Data;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "plc")
public class PLCData implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String plcName;
    private String adrIP;
    private int lengthRead;
    private int lengthWrite;
    private int dbRead;
    private int dbWrite;
    private int rack;
    private int slot;
    @OneToMany(cascade =CascadeType.PERSIST ,fetch = FetchType.LAZY)
    private List<PLCDbData> plcDbData;



    public PLCData() {
    }

    public PLCData(String plcName, String adrIP, int lengthRead, int lengthWrite, int dbRead,
                   int dbWrite, int rack, int slot,List<PLCDbData> plcDbData) {
        this.plcName = plcName;
        this.adrIP = adrIP;
        this.lengthRead = lengthRead;
        this.lengthWrite = lengthWrite;
        this.dbRead = dbRead;
        this.dbWrite = dbWrite;
        this.rack = rack;
        this.slot = slot;
        this.plcDbData=plcDbData;
    }
}
