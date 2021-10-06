# Jauxter

🆕  **Uses Kubernetes CronJob!**  🆕 

Jooxter booking automation made simpler (up to 7 days in the future).

## Install

Clone the repository, install the packages

```bash
cd jauxter
npm i
```

## Kubernetes 

### YAML configuration

> This uses `CronJob batch/v1beta1` resource, you might want to check your kubernetes version first if it's not working

Copy the k8s template:

```bash
cp cronjob.template.yml cronjob.yml
```

Edit the `cronjob.yml` file and set the env variables according to your values:

**Required:**

- `USER_ID`
- `USER_EMAIL`
- `USER_HASH`
- `AUTH_COOKIE`
- `BOOKING_RESOURCE_ID`

> Those fields values can be guessed when running a request on the jooxter app website with the web inspector.

**Optional:**

- `BOOKING_TITLE`
- `BOOKING_COLOR`
- `BOOKING_TIME_FROM`
- `BOOKING_TIME_TO`
- `BOOKING_EXT_PEOPLE`
- `BOOKING_DESCRIPTION`

> You can check both `auth.config.js` and `book.config.js` files for value format and examples.

### Deployment

```bash
kubectl create -f cronjob.yml --kubeconfig=<your kubeconfig file> -n <targeted namespace>

> cronjob.batch/jauxter-cron created
```

## Debug / local execution

Set the local environment variables, then:

```bash
npm start
```

If everything went ok, you should see something like:

```
[Jauxter Started]
Script will book this desk for the next 7 days (Mon-Fri)...
[ ✔ ] 02/07/2020
[ ✔ ] 03/07/2020
[ ✔ ] 06/07/2020
[ ✗ ] 07/07/2020 ...
```