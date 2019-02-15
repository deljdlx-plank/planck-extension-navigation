CREATE TABLE navigation_selectableentity
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,


    status INT,
    classname VARCHAR(1024),

    name VARCHAR(1024),
    description TEXT,



    properties TEXT,

    creation_date DATETIME,
    update_date DATETIME
)