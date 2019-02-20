CREATE TABLE navigation_container
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    status INT,
    qname VARCHAR(1024),
    name VARCHAR(1024),
    descriptor TEXT,
    properties TEXT,
    creation_date DATETIME,
    update_date DATETIME
)